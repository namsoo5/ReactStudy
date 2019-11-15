import React from 'react'
import { Button } from '@material-ui/core'

function User({ user, onRemove }) {
    return (
        <div>
            <b>{user.name}</b><span>{user.email}</span>
            <Button variant="contained" onClick={()=>onRemove(user.id)}>삭제</Button>
        </div>
    )
}


function UserList({users, onRemove}) {
    

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
                <User user={user} key={user.id} onRemove={onRemove}/>
            )}
        </div>

    )
}
export default UserList;