import React from 'react';
import Hello2 from './Hello';
import Wrapper from './Wrapper'
import Counter from './Counter'
import './App.css';
import InputSample from './InputSample';

function App() {

  const name = 'react';
  
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontsize: 24,
    padding: '1rem'
  }

  return (
    <div>
      {/*안보이는글씨*/}
      /*보이는글씨*/
      <br/>
      123
      {name}
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Hello2/>
      <Hello2 name="namsoo" />
      <Hello2 name="남수" color="blue" />
      <Wrapper>
        <Hello2 name="Hello React!" color="gray"/>
      </Wrapper>

      <Wrapper>
        <Hello2 name="Hello React!" color="gray" isSpecial={true}/>
      </Wrapper>

      <Wrapper>
        <Hello2 name="Hello React!" color="gray" isSpecial/>  {/* 변수 기본값 설정안할시 true */}
      </Wrapper>

      <Counter/>
      <br/>
      <br/>
      <InputSample/>

      </div>
  );
}

export default App;
