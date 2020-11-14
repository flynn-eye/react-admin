import React from 'react';
import './index.scss';
interface Props {
  backgroundImg: string;
}
const FullLayout: React.FC<Props> = (props) => {
  console.log(props);
  const bgd = {
    backgroundImage: `url(${props.backgroundImg})`
  };
  return (
    <div className="fullLayout" style={bgd}>
      {props.children}
    </div>
  );
};
export default FullLayout;
