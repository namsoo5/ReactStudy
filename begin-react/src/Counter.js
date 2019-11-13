import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

function Counter() {

    {/* 배열 비구조화 할당 */}
    {/* useState 첫번째요소는 현재상태, 두번째요소는 Setter함수 */}
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        console.log('+1')
        setNumber(number+1)
    }
    const onDecrease = () => {
        console.log('-1')
        setNumber(prevNum => prevNum-1)
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