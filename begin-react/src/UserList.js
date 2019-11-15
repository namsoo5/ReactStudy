import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log("User가 화면에 나타남")
        console.log(user)
        return () => {
            // deps가 빈상태[]면 화면에서 사라질시 clearup호출
            // 안에 특정값을 넣어줄경우 처음 마운트시, 값이 바뀌기직전에 호출, 언마운트시 호출
            // deps생략시 컴포넌트가 리렌더링 될때마다 호출댐
            console.log("User가 화면에서 사라짐")
            console.log(user)
        }
    }, [user])

    return (
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>{user.email}</span>
            <Button variant="contained" onClick={() => onRemove(user.id)}>삭제</Button>
        </div>
    )
}


function UserList({ users, onRemove, onToggle }) {


    return (
        /*
            <div>
                <User user={users[0]}/>
                <User user={users[1]}/>
                <User user={users[2]}/>
            </div>
        */
        <div>
            {users.map(user =>
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            )}
        </div>

    )
}
export default UserList;