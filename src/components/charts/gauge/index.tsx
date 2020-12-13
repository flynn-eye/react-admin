import React, { FC, useRef, useEffect } from 'react';
import { RingProgress } from '@antv/g2plot';
const work = (container: HTMLDivElement): RingProgress => {
  const ringProgress = new RingProgress(container, {
    height: 240,
    width: 240,
    autoFit: true,
    percent: (2015 - 1901) / (new Date().getFullYear() - 1901),
    color: ['#5B8FF9', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: { color: '#363636', fontSize: '12px', lineHeight: '14px' },
        formatter: () => '数据时间:2016~' + new Date().getFullYear()
      }
    }
  });
  return ringProgress;
};

const RingComponent: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const destroyFlag = useRef<{ chart: RingProgress | null }>({ chart: null });
  useEffect(() => {
    destroyFlag.current.chart = work(container.current!);
    destroyFlag.current.chart.render();
    return () => {
      destroyFlag.current.chart!.destroy();
    };
  }, []);
  return <div ref={container}></div>;
};
export default RingComponent;
