import React, { useState, useReducer } from 'react'
import Button from '@material-ui/core/Button';

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
}

function Counter() {

    {/* 배열 비구조화 할당 */}
    {/* useState 첫번째요소는 현재상태, 두번째요소는 Setter함수 */}
    // const [number, setNumber] = useState(0)
    // const onIncrease = () => {
    //     console.log('+1')
    //     setNumber(number+1)
    // }
    // const onDecrease = () => {
    //     console.log('-1')
    //     setNumber(prevNum => prevNum-1)
    // }

    const [number, dispatch] = useReducer(reducer, 0)

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'})
    }
    const onDecrease = () => {
        dispatch({type: 'DECREMENT'})
    }
    
    return (
        <div>
            <h1>{number}</h1>
            <Button variant="contained" onClick={onIncrease}>+1</Button>
            <Button variant="contained" onClick={onDecrease}>-1</Button>
        </div>
    )
}
export default Counter