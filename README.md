# Spring 스터디
### 2019.11.05 ~ 

<br>

### 환경 
* JavaScript
* VSCode

<br>

## 목차
* [1회 스터디](#1회)
* [2회 스터디](#2회)

<br>

***

## 1회(OT)
### 2019.11.05
* 스터디 방향 결정
* https://react.vlpt.us 따라하기
* 과제로 5번까지해오기

<br>

<br>

## 2회
### 2019.11.12
* 여러개의 input 상태관리
* 라이브러리 import
* Spread 연산자
    * 배열에 직접적으로 값을 변경할수 없으나 ...문법인 Spread연산자로 배열을 복사하고 그 배열의 내용을 수정할 수 있다.

``` JavaScript
{/* useState에 객체를 사용할시 */}
const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

return (
  <input name="name" placeholder="이름" onChange={onChange} value={name} />
)

```
* useRef
* useState
    
<br>

<br>

