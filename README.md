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
* [3회 스터디](#3회)
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

> 과제
* __useEffect__
  * 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열
  * 두번째 파라미터가 빈상태[]면 화면에서 사라질시 clearup호출
  * 안에 특정값을 넣어줄경우 처음 마운트시, 값이 바뀌기직전에 호출, 언마운트시 호출
  * 두번째 파라미터 생략시 컴포넌트가 리렌더링 될때마다 호출댐

* __useMemo__
  * 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수, 두번째 파라미터에는 deps배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용
    
* __useCallback__
  * useMemo는 특정 결과값을 재사용 할 때 사용, useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용

* __React.memo__
  * 컴포넌트의 props가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화

* __useReducer__
  * useState, useReducer를 사용해보고 맘에드는 방식을 선택
  * 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있음
  
<br>

<br>

## 3회
### 2019.11.19
