import React from 'react';
const Box = (props) => {
    let styleBox = {
        width: '20px',
        height: '20px',
        backgroundColor: 'cyan',
        margin: '0.5px',
    }
    return ( 
        <div id={"box"+props.id} style={styleBox} onClick={props.clicked}>{props.value}</div>
     );
}
 
export default Box;