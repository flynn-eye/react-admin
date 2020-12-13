import React, { FC } from 'react';
import './index.scss';
import StarMap from '../../components/charts/star';
import RingComponent from '../../components/charts/gauge';
import { Row, Col, Card } from 'antd';
import nobelData from '../../asserts/data/json_laureates.json';
import Progress from '../../components/charts/progress';
import CountLine, { ICountLine } from '../../components/charts/countLine';
import chineseData from '../../asserts/data/chinese.json';
let count = {
  male: 0,
  female: 0
};
let lineData: ICountLine[] = [];
let lineTemp = new Map<number, Map<string, number>>();
const tempCount = new Map<string, number>();
nobelData.forEach((item) => {
  if (item.gender === 'male') {
    count.male++;
  } else {
    count.female++;
  }
});

chineseData.forEach((item) => {
  if (lineTemp.has(item.year)) {
    let tempMap = lineTemp.get(item.year);
    if (tempMap!.has(item.type)) {
      tempCount.set(item.type, tempCount.get(item.type)! + item.number);
      tempMap!.set(item.type, tempCount.get(item.type)!);
      lineTemp.set(item.year, tempMap!);
    } else {
      if (tempCount.has(item.type)) {
        tempCount.set(item.type, tempCount.get(item.type)! + item.number);
        tempMap!.set(item.type, tempCount.get(item.type)!);
        lineTemp.set(item.year, tempMap!);
      } else {
        tempCount.set(item.type, item.number);
        tempMap!.set(item.type, item.number);
        lineTemp.set(item.year, tempMap!);
      }
    }
  } else {
    if (tempCount.has(item.type)) {
      tempCount.set(item.type, item.number + tempCount!.get(item.type)!);
      lineTemp.set(item.year, new Map<string, number>().set(item.type, tempCount!.get(item.type)!));
    } else {
      tempCount.set(item.type, item.number);
      lineTemp.set(item.year, new Map<string, number>().set(item.type, item.number));
    }
  }
});
lineTemp.forEach((item, key) => {
  if (key === 1901 || !(key % 5) || key === 2016) {
    item.forEach((count, type) => {
      lineData.push({
        year: key,
        count: count,
        type: type
      });
    });
  }
});
let genderPercent = +(count.male / (count.male + count.female)).toFixed(2);
const DashBoard: FC = (props) => {
  return (
    <Row className="dashboard__container" justify="center" gutter={[16, 16]}>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
        <Card bodyStyle={{ height: '600px' }}>
          <StarMap />
        </Card>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
        <Row gutter={[16, 16]}>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Card bodyStyle={{ height: '292px' }}>
              <RingComponent />
            </Card>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Card
              bodyStyle={{
                height: '292px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Progress percent={genderPercent} />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Card bodyStyle={{ height: '292px' }}>
              <CountLine data={lineData} />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default DashBoard;
