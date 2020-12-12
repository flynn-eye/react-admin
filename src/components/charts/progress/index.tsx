import React, { FC, useRef, useEffect } from 'react';
import { Progress } from '@antv/g2plot';
import { Row } from 'antd';
import './index.scss';
const work = (container: HTMLDivElement, percent: number): Progress => {
  const progress = new Progress(container, {
    height: 60,
    width: 200,
    autoFit: false,
    percent: percent,
    color: ['#5B8FF9', '#F4664A']
  });
  return progress;
};

const RingComponent: FC<{ percent: number }> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const destroyFlag = useRef<{ chart: Progress | null }>({ chart: null });
  useEffect(() => {
    destroyFlag.current.chart = work(container.current!, props.percent);
    destroyFlag.current.chart.render();
    return () => {
      destroyFlag.current.chart!.destroy();
    };
  }, []);
  return (
    <>
      <Row>
        <div ref={container}></div>
      </Row>
      <Row justify="center" className="progress__container">
        <div>
          男 <div className="progress__container__male"></div>女{' '}
          <div className="progress__container__female"></div>
        </div>
      </Row>
    </>
  );
};
export default RingComponent;
