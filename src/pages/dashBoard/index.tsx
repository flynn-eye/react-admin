import React, { FC, Suspense, lazy } from 'react';
import './index.scss';
import StarMap from '../../components/charts/star';
import RingComponent from '../../components/charts/gauge';
import { Row, Col, Card, Skeleton } from 'antd';
import nobelData from '../../asserts/data/json_laureates.json';
import Progress from '../../components/charts/progress';

let count = {
  male: 0,
  female: 0
};
nobelData.forEach((item) => {
  if (item.gender === 'male') {
    count.male++;
  } else {
    count.female++;
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
              <RingComponent />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default DashBoard;
