import React from 'react';

function Hello(props){
    return <div>안녕하세요 {props.name}</div>
}

function Hello2({name, color, isSpecial}){
    
    return <div style={{color}}> {isSpecial && <b>*</b>} Hi, {name}</div>
}
Hello2.defaultProps = {
    name: 'NoName',
    color: 'red'
}
export default Hello2;