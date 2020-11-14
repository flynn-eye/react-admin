import React from 'react';
interface Props {
  backgroundImg: string;
}
const FullLayout: React.FC<Props> = (props) => {
  console.log(props);
  const bgd = {
    backgroundImage: `url(${props.backgroundImg})`,
    backgroundColor: '#f0f2f5',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 110px',
    backgroundSize: '100%'
  };
  return <div style={bgd}>{props.children}</div>;
};
export default FullLayout;
