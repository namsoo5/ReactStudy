import React, { useRef, useState } from 'react';
import Hello2 from './Hello';
import Wrapper from './Wrapper'
import Counter from './Counter'
import './App.css';
import InputSample from './InputSample';
import UserList from './UserList'
import CreateUser from './CreateUser';

function App() {

  const name = 'react';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontsize: 24,
    padding: '1rem'
  }
  /*
    const users = [
      {
        id: 1,
        username: 'user1',
        email: 'test@naver.com'
      },
      {
        id: 2,
        username: 'user2',
        email: 'test2@naver.com'
      },
      {
        id: 3,
        username: 'user3',
        email: 'test3@naver.com'
      }
    ]
  */
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const { username, email } = inputs

  const onChange = e => {
    const { name, value } = e.target

    setInputs({
      ...inputs,
      [name]: value
    })

  }

  const [users, setUsers] = useState(
    [
      {
        id: 1,
        username: 'change1',
        email: 'wow1@naver.com',
        active: true
      },
      {
        id: 2,
        username: 'change2',
        email: 'wow2@naver.com',
        active: true
      },
      {
        id: 3,
        username: 'change3',
        email: 'wow3@naver.com',
        active: true
      }
    ]
  )

  const nextId = useRef(4)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    //배열추가하기 방법1
    setUsers([
      ...users,
      user
    ])

    //배열추가하기 방법2
    // setUsers(users.concat(user))

    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1
  }

  const onRemove = id => {
    // id가일치 하지않는 원소들만 가지고새로운 배열을 생성
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
      setUsers(
        users.map(user =>
            user.id == id ? { ...user, active: !user.active} : user
          )
      )
  }

  return (
    <div>
      {/*안보이는글씨*/}
      /*보이는글씨*/
      <br />
      123
      {name}
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Hello2 />
      <Hello2 name="namsoo" />
      <Hello2 name="남수" color="blue" />
      <Wrapper>
        <Hello2 name="Hello React!" color="gray" />
      </Wrapper>

      <Wrapper>
        <Hello2 name="Hello React!" color="gray" isSpecial={true} />
      </Wrapper>

      <Wrapper>
        <Hello2 name="Hello React!" color="gray" isSpecial />  {/* 변수 기본값 설정안할시 true */}
      </Wrapper>

      <Counter />
      <br />
      <br />
      <InputSample />

      <br />
      <br />
      <br />
      <CreateUser
        userName={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate} />

      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
