import React from 'react'
import { Button } from '@material-ui/core'

function CreateUser({userName, email, onChange, onCreate}){
    return (
        <div>
            <h1> 계정 등록 </h1>
            <input
            name = 'username'
            placeholder = '계정명'
            onChange = {onChange}
            value = {userName}
            />

            <input
            name = 'email'
            placeholder = '이메일'
            onChange = {onChange}
            value = {email}
            />

            <Button variant="contained" onClick={onCreate}>등록</Button>
        </div>
    )
}

export default React.memo(CreateUser)