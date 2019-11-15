import React from 'react'
import { Button } from '@material-ui/core'

function User({ user, onRemove, onToggle }) {
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