import React, { FC, useRef, useEffect } from 'react';
import { Line } from '@antv/g2plot';
export interface ICountLine {
  type: string;
  count: number;
  year: number;
}
const work = (container: HTMLDivElement, data: ICountLine[]): Line => {
  const linePlot = new Line(container, {
    data: data,
    xField: 'year',
    yField: 'count',
    seriesField: 'type',
    height: 240,
    autoFit: false,
    yAxis: {
      label: {
        formatter: (v) => {
          return v + '个';
        }
      }
    },
    legend: {
      position: 'top'
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 25000
      }
    }
  });
  return linePlot;
};

const CountLine: FC<{ data: ICountLine[] }> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const destroyFlag = useRef<{ chart: Line | null }>({ chart: null });
  useEffect(() => {
    destroyFlag.current.chart = work(container.current!, props.data);
    destroyFlag.current.chart.render();
    return () => {
      destroyFlag.current.chart!.destroy();
    };
  }, []);
  return <div ref={container}></div>;
};
export default CountLine;
