import React from 'react';
import { LineLayer, MapboxScene, Marker, PolygonLayer, Popup } from '@antv/l7-react';

function joinData(geodata: any, ncovData: any) {
  const ncovDataObj: any = {};
  ncovData.forEach((item: any) => {
    const {
      countryName,
      countryEnglishName,
      currentConfirmedCount,
      confirmedCount,
      suspectedCount,
      curedCount,
      deadCount
    } = item;
    if (countryName === '中国') {
      if (!ncovDataObj[countryName]) {
        ncovDataObj[countryName] = {
          countryName: 0,
          countryEnglishName,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          suspectedCount: 0,
          curedCount: 0,
          deadCount: 0
        };
      } else {
        ncovDataObj[countryName].currentConfirmedCount += currentConfirmedCount;
        ncovDataObj[countryName].confirmedCount += confirmedCount;
        ncovDataObj[countryName].suspectedCount += suspectedCount;
        ncovDataObj[countryName].curedCount += curedCount;
        ncovDataObj[countryName].deadCount += deadCount;
      }
    } else {
      ncovDataObj[countryName] = {
        countryName,
        countryEnglishName,
        currentConfirmedCount,
        confirmedCount,
        suspectedCount,
        curedCount,
        deadCount
      };
    }
  });
  const geoObj: any = {};
  geodata.features.forEach((feature: any) => {
    const { name } = feature.properties;
    geoObj[name] = feature.properties;
    const ncov = ncovDataObj[name] || {};
    feature.properties = {
      ...feature.properties,
      ...ncov
    };
  });
  return geodata;
}

const WorldMap = React.memo(function Map() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const [geoData, ncovData] = await Promise.all([
        fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/e62a2f3b-ea99-4c98-9314-01d7c886263d.json'
        ).then((d) => d.json()),
        // https://lab.isaaclin.cn/nCoV/api/area?latest=1
        fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/55a7dd2e-3fb4-4442-8899-900bb03ee67a.json'
        ).then((d) => d.json())
      ]);
      setData(joinData(geoData, ncovData.results));
    };
    fetchData();
  }, []);
  return (
    <>
      <MapboxScene
        map={{
          dragPan: false,
          pitch: 0,
          style: 'blank',
          zoom: 0,
          maxZoom: 0,
          minZoom: 0,
          width: 800,
          scrollZoom: false
        }}
        style={{
          position: 'absolute',
          background: '#fff', // 地图背景色
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {data && [
          <PolygonLayer
            key={'1'}
            options={{
              autoFit: true
            }}
            source={{
              data
            }}
            scale={{
              values: {
                confirmedCount: {
                  type: 'quantile'
                }
              }
            }}
            active={{
              option: {
                color: '#0c2c84'
              }
            }}
            color={{
              field: 'confirmedCount', // 填充颜色
              values: ['#409EFF', '#67B1FF', '#8CC4FF', '#A0CFFF', '#B2D8FE', '#ECF6FF'].reverse()
            }}
            shape={{
              values: 'fill'
            }}
            style={{
              opacity: 1
            }}
          />,
          <LineLayer
            key={'2'}
            source={{
              data
            }}
            size={{
              values: 0.6
            }}
            color={{
              values: '#aaa' // 描边颜色
            }}
            shape={{
              values: 'line'
            }}
            style={{
              opacity: 1
            }}
          />
        ]}
      </MapboxScene>
    </>
  );
});
export default WorldMap;
