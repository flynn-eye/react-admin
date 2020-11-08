import React from 'react';
interface Props{
    backgroundImg:string,
}
const FullLayout:React.FC<Props> =  (props)=>{
    console.log(props)
    const bgd = {
        backgroundImage: `url(${props.backgroundImg})`,
        width:'100vw',
        height:'100vh',
    }
    return(
        <div style={bgd}>
            {props.children}
        </div>
    )
}
export default FullLayout;