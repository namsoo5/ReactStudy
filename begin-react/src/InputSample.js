import React, {useState, useRef} from 'react'
import { Button } from '@material-ui/core'

function InputSample() {

    // const [text, setText] = useState('')
    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    })

    const {name, nickName} = inputs;

    const nameInput = useRef();

    const onChange = (e) => {
        //setText(e.target.value)
        const {name, value} = e.target
        {/* ...inputs으로 객체를 불러오고 []를이용해서 키값으로 name값을 쓰고 불러와서 값을 수정가능 */}
        setInputs({
            ...inputs,
            [name] : value
        })

    }

    const onReset = () => {
        {/* 객체의 name속성이 없을시 수정 불가능! 변수의 값을 ''로해서 초기화시키기 */}
        setInputs({
            name : '',
            nickName : ''
        })

        {/* 포커스 미리설정해둔 곳으로 */}
        nameInput.current.focus();
    }

    return(
        <div>
            <input name="name" onChange={onChange} placeholder="이름" ref={nameInput} value={name}/>  {/* ref로 포커스받을 DOM에 설정 */}
            <input name="nickName" onChange={onChange} placeholder="닉네임" value={nickName}/>

            <Button variant="contained" onClick={onReset}>초기화</Button>
            <div><b>값: {name} ({nickName})</b></div>
        </div>
    )
}

export default InputSample
