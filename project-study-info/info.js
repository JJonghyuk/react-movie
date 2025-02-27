// *** 리엑트 설치 ***
// npx create-react-app -리엑트 설치 할 이름-
// ex) npx create-react-app react-masterclass

// ----------------------------- #2 [Update] The Basics of React -----------------------------

// # 2.2
// 암기할 필요 없다. 이해하기
// 리액트를 import했기 때문에 createElement function을 가진 리액트 object에 접근 가능
// const span 그러나 createElement(“span”) 은 반드시 생성하고자 하는 HTML 태그와 똑같아야함

// React JS - 어플리케이션이 아주 인터랙티브하도록 만들어주는 library. 엔진과 같다.
// React-dom - library 또는 package. 모든 react element들을 HTML body에 둘 수 있도록 해줌.
// ReactDOM.render() - render의 의미는 react element를 가지고 HTML로 만들어 배치한다는 것. 즉, 사용자에게 보여준다는 의미
// ReactDOM.render(span, span이 가야할 위치)
// -> 그래서 보통 body에 id=“root” 만들어서 span을 root 안에 두라고 함

// React.createElement("span", {span의 property}, “span의 내용”)
// -> property는 class name, id도 가능 style도 가능
// -> 참고만 하고 외우지 말기. 이렇게 쓸 일 없음

// 바닐라JS는 HTML -> JS 순서
// 리액트는 JS -> HTML 순서

// JS가 element를 생성하고 React JS가 그것을 HTML로 번역하는 것
// React JS는 업데이트 해야 하는 HTML을 업데이트 할 수 있음

// # 2.3
// 두 가지 const를 render 하고 싶은 경우 div를 만든다
// 그리고 React.createElement("div", null, [span, btn]); 와 같이 배열을 만들어서 const를 넣어준다.

// property에 eventListener 넣는 것도 가능.
// 클릭 - {onClick: () => console.log("I'm clicked")}
// 마우스엔터 - {onMouseEnter: () => console.log("mouse enter")}

// # 2.5
// JSX – 자바스크립트를 확장한 문법
// 보통의 HTML과 비슷. 그러나 property를 HTML 태그의 속성처럼 적으면 됨
// const Title = (
// console.log("mouse enter")}>
// Hello I'm a span

// );
// style={{ backgroundColor: "tomato" }} -> 스타일은 {} 2개임
// JSX를 브라우저가 온전히 이해하지 못하므로 이해할 수 있게
// https://unpkg.com/@babel/standalone/babel.min.js 를 설치해야함
// -> JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔줌
// 바벨을 가져온 뒤 script type="text/babel"로 적어줘야 인식함

// style={{
//   backgroundColor: "orange",
//   }}에서 중괄호가 두 개인 이유:
//   첫 번째 중괄호 쌍 { }: 이것은 JSX 문법에서 JavaScript 표현식을 삽입할 때 사용합니다. React 컴포넌트에서 JavaScript 코드를 직접 사용하기 위해 필요합니다.
//   두 번째 중괄호 쌍 {{ }}: 이것은 JavaScript 객체 리터럴을 나타냅니다. style 속성은 CSS 속성들을 포함하는 JavaScript 객체를 값으로 받습니다.

//   따라서 전체적으로 {{}} 형태가 되는 것입니다.
//   만약 중괄호를 하나만 사용하면, React는 이를 단순한 JavaScript 표현식으로 해석하려고 하지만, 실제로는 객체를 정의하고 있기 때문에 문법 오류가 발생합니다.
//   올바른 형식은 이렇습니다:
//   jsxCopystyle={{backgroundColor: "orange"}}
//   이는 다음과 같이 해석됩니다:

//   {{ }}
//   바깥쪽 { }: JSX에서 JavaScript를 사용하기 위한 구문
//   안쪽 { }: JavaScript 객체 리터럴

//   이 방식으로 React 컴포넌트에 인라인 스타일을 적용할 수 있습니다.
//   -claude-

// # 2.6
// div에 const 넣기 위해선
// 1. const를 함수로 만들어 줘야함 const Btn = () => ( );
// -> arrow function 이라고 부름
// = () => ( ); 는 / function Btn() { return ( ); } 와 같음 -> return 을 꼭 해줘야 함.

// 값을 반환할 때: () => ( 값 ) // --> return 을 자동으로 해줌
// 객체를 반환할 때: () => ({ 객체 }) // --> return 을 자동으로 해줌
// 아무것도 반환하지 않을 때: () => {}

// 2. HTML 태그처럼 만들어서 넣어줌
// 3. (중요) 컴포넌트의 첫 글자는 반드시 대문자여야 함
// -> 우리가 직접 만든 요소는 전부 대문자로 시작해야 함

// ----------------------------- //#2 [Update] The Basics of React -----------------------------

// ----------------------------- #3 [Update] State -----------------------------

// # 3.0
// 리액트가 아닌 경우, 일반 자바스크립트를 쓴 브라우저는 노드정보가 바뀔때마다 노드트리를 처음부터 다시 생성한대요 5단계에 걸쳐서. 근데 리액트는 가상돔을 써서 우리 시야에 보이는 부분만 수정해서 보여주고 모든 업뎃이 끝나면 일괄로 합쳐서 실제 돔에 던져준다고합니다! 이거 면접때 많이 물어보는거래요. 브라우저 작동원리와 연관있음. 니꼬쌤이 말하는 “렌더”가, 렌더트리를 말씀하시는 것 같은데 프엔은 이 렌더트리 단계를 얼마나 최적화하는가가 중요하다더라구요!

// # 3.1
// 리액트JS에서 데이터를 저장시켜 자동으로 리렌더링을 일으킬 수 있는 방법
// const data = React.useState();를 console.log 시키면
// [undefined, f ] -> undefined와 함수가 적힌 배열이 나타남
// undefined는 data이고 f는 data를 바꿀 때 사용하는 함수
// React.useState() 함수는 초기값을 설정할 수 있음
// 즉, undefined는 초기값이고 두 번째 요소인 f는 그 값을 바꾸는 함수

// 배열을 꺼내기
// const x = [1, 2, 3]
// const [a, b, c] = x;
// 으로 꺼낼 수 있음

// # 3.2

// React.useState() 배열에서
// 보통 데이터에는 counter처럼 원하는대로 붙이고
// f는 set 뒤에 데이터 이름을 붙임 (setCounter)
// 어떤값을 부여하던 setCounter 함수는 그 값으로 업데이트하고 리렌더링 일으킴
// 1. counter라는 데이터를 받음
// 2. return()에 그 데이터를 담고 있음 (리턴은 사용자가 보게될 컴포넌트)
// 3. 버튼이 클릭되면 counter값을 바꿔줄 함수 호출 -> setCounter
// 4. counter의 새로운 값을 가지고 counter 함수를 호출
// 5. 그 새로운 값은 setCounter(counter + 1)에 써준 counter + 1

// # 3.3
// const [counter, setCounter] = React.useState(); 에서
// React.useState() 는 react기능을 쓸 수있게 해주는 하나의 도구이고,
// counter은 현재의 값 state 이며,
// setCounter은 이벤트 발생시 변화를 주는 부분이어서 이후 counter로 다시 저장된다.

// React.js는 똑똑한 기능을 가지고 있기 때문에 매번 자동으로 바뀌는 리렌더링해준다.
// 하지만! 그냥 똑똑한게 아니라 엄청 똑똑하기 때문에 '실제로 바뀌는 값'만 판단해서 불필요한 리렌더링을 제외한 채로 동작한다!!!

// # 3.4
// state를 세팅하는 데는 2가지 방법이 있다. (2번째 방법이 안전하다)
// 1) 직접 할당 :setState(state +1)
// 2)함수를 할당:setState(state => state +1) (함수의 첫번째 인자는 현재 state 이다)

// 현재 state랑 관련이 없는 값을 새로운 state로 하고싶은 경우에는 (1),
// 현재 state에 조금의 변화를 주어서 새로운 state를 주고 싶은 경우에는 (2)

// # 3.5
// react, reactdom을 import하는 script tag에서
// production - > development 로 변경하는데
// production은 배포 모드, development는 개발 모드를 의미합니다.
// 개발모드는 니코쌤이 보여준 것 처럼 버그로 이어질 수 있는 요소들을 미리 경고하는 검증 코드가 포함되어 있습니다.

// 참고 : https://ui.toast.com/weekly-pick/ko_20191212

// # 3.6
// - input에 value={minutes} 넣는 이유는 외부에서도 value 값을 수정 하기 위해서

// # 3.7
// flip
// const onFlip = () => setFlipped(!flipped);
// -> flipped가 true라면 부정명제인 !flipped는 false
// -> false라면 true

// state값으로 input을 enabled할지 disabled 할지를 결정할 수 있음

// 디폴트 값이 false 라고 정했으므로 Hours는 disabled 되어야함
// 그래서 disabled={flipped === false}를 써줘서
// flipped가 false라면, disabled는 true가 되도록 만들어줌
// Minuets에는 반대로
// disabled={flipped === true}라고 써줌
// 그러나
// Hours는
// disabled={!flipped}
// Minuets에는 반대로
// disabled={flipped}
// 주는게 더 짧고 좋음

// 시간 -> 분 컨버터
// 삼항연산자(ternary operator) 사용하기
// flipped ? amount : amount / 60
// -> 만약 flipped 상태면 state에 있는 값을 그대로 보여주기
// 아니라면 60으로 나눈 변환된 값 보여주기
// value={flipped ? amount * 60 : amount}
// -> 만약 flipped 상태면 60으로 곱한 변환된 값 보여주기
// 아니라면 state에 있는 값을 그대로 보여주기

// flip누르면 변화된 값 그대로 가져오므로
// onFlip 변수에 reset(); 넣어주기

// # 3.8

// # 3.9
// const [array, modifier] = React.useState() -> 함수를 실행 state를 변화 시킬때 다시 re-render 한다!

// ----------------------------- //#3 [Update] State -----------------------------

// ----------------------------- #4 [Update] Props  -----------------------------

// # 4.0

// 버튼의 style property(속성)을 사용
// style={{
// backgroundColor: "tomato",
// }}
// { -> 2개 열고 일반적인 HTML방식으로 써주면 됨

// 그러나 너무 길어진다
// 이런 스타일들을 모두 갖는 단 한가지의 컴포넌트로 만들어 재사용 가능

// 내가 만들고 사용하는 모든 컴포넌트들은
// function Btn() -> 괄호로 argument(인자)를 받는다.
// -> argument의 이름은 마음대로 지어줄 수 있다.
// 보통은 props라고 부른다. Btn으로부터 전달받는 속성이다.

// 현재 하고 있는 작업은 Btn이라는 이름의 함수를 부르고 있는 것 뿐
// 그리고 정보를 함수에 전달하는 것이다.
// 리액트가 실제로 하는 작업은 Btn() 이렇게 함수를 호출해서
// 우리가 넣어둔 모든 것들을 첫 번째 인자로 넣어준다.
// -> Btn({banana:"Save Changes"})
// 즉 리액트는 자동으로 이곳에 넣는 모든 prop들을 모두
// Btn({banana:"Save Changes"})
// 위 오브젝트 안으로 집어넣는다.
// 그리고 이 오브젝트는 Btn() 컴포넌트의 첫 번째 인자로 주어진다.
// 두 번째 인자는 없다. 유일한 인자이다.
// 그리고 Btn({banana:"Save Changes"})를 props로 이름 지어준다.
// 그리고 {props.banana}
// 이라 적어주어 에 적어주었던 banana 키를 가져온다.
// shortcut은 Btn()에 props를 적지 말고 {banana}를 적으면
// {banana}적는게 가능하다.

// function Btn(props) { --> (text) 이렇게 적을경우
//   return (
//     <button>
//       props.text --> 이렇게 적어야 한다.
//     </button>
//   )
// }

// function Btn({text}) { --> 오브젝트(객체)로 적을 경우 * 이렇게 사용 하는게 일반적으로 좋음 *
//   return (
//     <button>
//       text --> 이렇게 적어야 한다.
//     </button>
//   )
// }

// # 4.1
// 1. props에 function도 보낼 수 있음
// 이것은 JSX로 html 태그 자체에 이벤트 리스너를 넣는것과는 전혀 다른 것임.
// 그저 이벤트를 실행시키는 함수가 프로퍼티로 들어간 것임.
// prop은 그냥 부모에서 자식으로 데이터를 넘길 때 사용하는 argument의 역할이니까!

// 2. (07:41~) 부모의 상태를 바꾸는 함수를 만들었고, 부모 컴포넌트에서 그 함수를 prop으로 보내면 자식 컴포넌트에서 그 함수가 실행된다.

// 3. 불필요한 re-render는 React.memo()로 관리할 수 있음
// 부모 컴포넌트의 state를 변경하면 당연히 그 자식 컴포넌트들도 Re-render가 일어남. 불필요한 렌더링이 발생할 수도 있는데, 이 경우에는 React.memo()로 prop의 변경이 일어난 부분만 렌더링 시킬 수 있음. 아주 많은 자식 컴포넌트를 가지고 있는 부모 컴포넌트일 때 사용하면 될듯.

// * React.memo()
// 컴포넌트가 React.memo()로 wrapping 될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.

// ex)
// function Btn({text, changeValue}){ }

// const MemoBtn = React.memo(Btn);
// function App() {
//   const [value, setValue] = React.useState("Save Changes");
//   const changeValue = () => setValue("Revert Changes");
//   return(
//     <div>
//       <MemoBtn text={value} changeValue={changeValue}/>
//       <MemoBtn text="Continue"/>
//     </div>
//   )
// }

// # 4.2
// 1.리액트는 파라미터를 잘 못 넘겨도 확인할 수 없는 문제점이 존재한다.
// 2. 이런 문제를 줄이기 위해서 PropTypes라는 모듈의 도움을 받을 수 있다.
// 3. type과 다르게 입력 되엇을 경우 warning을 뜨게 할수 있고, parameter 에 값을 넣지 않는 경우 경고 메시지를 띄울수 있다.

// Btn.propTypes = {            --> propTypes 소문자
//   text : PropTypes.string,   --> PropTypes 대문자
//   fontSize : PropTypes.number,
// }

// https://www.npmjs.com/package/prop-types

/* <script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script> */
// --> 개발자 모드 소스로 해야지 propTypes 사용 가능
// npm i prop-types

// # 4.3
// 1. Prop 은 component 에 보내지는 argument 입니다.
// 2. PropType을 이용해서 보내지는 prop 에 type을 정의 할수 있습니다. 정의 하는 이유는 잘못된 type의 prop 이 보내지는 것을 방지하기 위해서 입니다. PropType을 정의 했을때 React는 에러메세지를 통해서 잘못된 type이 보내지고 있다고 알려줍니다.

// ----------------------------- // #4 [Update] Props -----------------------------

// ----------------------------- #5 [Update] Create React App -----------------------------

// # 5.0

// # 5.1
// - $ npm i prop-types => prop의 type을 정할 수 있다.
// - create-react-app에서 css 파일을 적용시키는 법은 두 가지다. 하나는 css파일을 만든 후 index.js로 가서 import하는법. 다른 하나는 css모듈을 사용하는 것이다.
// - 어플리케이션을 위한 다른 CSS module도 만들어 볼 수 있다.
// - .module.css만 붙는다면 이름은 중요하지 않다.
// - 같은 클래스 명이라도 import하는 파일만 다르다면 중복적용 되지 않는다. HTML내에서 react가 랜덤방식으로 클래스이름을 생성한다.

// ----------------------------- // #5 [Update] Create React App -----------------------------

// ----------------------------- #6 [Update] Effects -----------------------------

// // # 6.0
// const [counter, setValue] = useState(0);
// -> 리액트 앱으로 하는 중이라 앞에 React 안붙여도됨
// -> import { useState } from "react";

// state를 변경할 때 ‘모든’ code 들을 항상 다시 실행됨
// 첫 번째 render에만 코드가 실행되고 다른 state변화에는 실행되지 않도록 만들자
// 예) API를 통해 데이터를 가져올 때 컴포넌트 렌더에서 API를 부르고
// 이후 상태가 변화할 때 그 API에서 데이터를 다시 가져오지 않게 만들 수 있다.

// # 6.1
// useEffect
// - 두 개의 argument를 가지는 함수
// - 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
// - 두 번째는 [] 배열을 넣어줌
// -> useEffect가 컴포넌트의 첫 번째 렌더 시점에 iRunOnlyOnce 함수 호출
// 그리고 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
// 즉, 한번만 렌더링 됨
// 단순화 하여 useEffect(() => {
// console.log("CALL THE API")
// },[]); 써도 됨

// 참고로 useEffect는 화면이 다 그려지고 나서 실행됩니다. 즉 화면을 먼저 그리고 그다음 실행되요~
// 따로 생명주기는 언급안하셔서 글 남깁니다.
// memo랑 헷갈리시는 분이 계시는데 이건 라이프 사이클이랑 연관이 있는 함수이고, 최초 실행만 할 것이냐, 아님 props, state에 따라(언급한 마법) 렌더링시 다시 그릴것이냐 판단하는 함수인듯 합니다.
// class 문법 라이프 사이클 펑션을 함축해놓은게 useEffect 입니다.

// # 6.2
// useEffect 글자를 타이핑할 때마다 API를 새로 호출하지 않고 한번만 호출해준다.

// search keyword에 변화가 있을 때 만! marvel영화를 검색하고 싶을 때
// 즉, 특정한 코드만 변화했을 때 원하는 코드들을 실행할 수 있는 방법
// -> useEffect(() => {
// console.log("SEARCH FOR", keyword);
// }, []);
// 이렇게 실행하면 1번만 됨
// 그리고 []자리에 keyword 써줌
// -> keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것.
// 이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유임
// react가 지켜볼 게 아무것도 없으니 처음 한번만 실행되는 것

// useEffect(() => {
// console.log("I run when 'keyword & counter' changes.")
// }, [keyword, counter]);
// -> 2개도 가능

// ex)
// const [counter, setValue] = useState(0);
// const [keyword, keywordValue] = useState("");
// const onClick = () => setValue((prev) => prev + 1);
// const onChange = (event) => keywordValue(event.target.value)
// useEffect(() => {
//   console.log("[] 없으면 한번 실행")
// }, [])
// useEffect(() => {
//   console.log("키운터가 추가 될때 실행 됩니다.")
// }, [counter])
// useEffect(() => {
//   console.log("검색 내용이 추가 될때 실행 됩니다.",)
// }, [keyword])
// useEffect(() => {
//   console.log("카운터 & 검색 내용이 추가 될때 실행 됩니다.")
// }, [counter, keyword])

// # 6.3
// • 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
// • useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// • props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
// • useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

// 🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
// 🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능

// # 6.4
// Hello 컴포넌트를 hide할 때는 컴포넌트가 스크린에서 지워지고
// show를 누르면 컴포넌트가 다시 생성되므로
// useEffect도 다시 실행됨을 알 수 있다.
// -> 정해준 useEffect가 컴포넌트가 생성될 때 콘솔 로그를 하라는 것이기 때문
// function Hello() {
// useEffect(() => {
// console.log("Hi");
// }, []);

// 컴포넌트가 destroy될 때도 코드를 실행할 수 있다
// -> return으로 함수를 만들어주면 된다.
// useEffect는 함수를 받고, 이 함수는 dependency가 변화할 때 호출됨
// 현재는 dependency가 비어있으니 컴포넌트가 처음 생성될 때 함수가 호출된 후 다시
// 호출 되지 않음
// 그래서 컴포넌트가 파괴될 때도 함수를 실행하고 싶으면
// useEffect 함수가 새로운 함수를 return해야 함
// -> 왜냐면 deps가 비어있으면 자동으로 컴포넌트가 파괴될 때 cleanup함수가 실행되는데 그 과정이 리렌더링으로 useEffect함수가 실행되고 클린업하면서 이전에 있던 이펙트인 console.log(“created :) )가 삭제되고 새로운 이펙트 함수인 return함수가 실행되기 때문이다.
// 리렌더링 -> 이전 이펙트 클린업 -> 이펙트 실행
// (참고 https://simsimjae.tistory.com/401)

// function Hello() {
//   useEffect(function () {
//     console.log("hi :)");
//     return function () {
//       console.log("bye :(");
//     };
//   }, []);
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   }, []);
//   return <h1>Hello</h1>;
// }
// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// ----------------------------- // #6 [Update] Effects -----------------------------

// ----------------------------- #7 [Update] Practice Movie App -----------------------------

// # 7.0
// form은 submit 이벤트를 갖고 있다.
// 그러므로 evernt.preventDefault() 함수를 이용하여 기본 동작을 막자.
// 여러 개의 toDo를 받을 수 있는 배열 만들기
// const [toDos, setToDos] = useState([]); -> 기본값은 비어있는 배열
// state는 직접적으로 수정 불가능 (예 : toDo = “” )
// 함수를 가져와서 수정하게 만들어야함 (예 : setToDo = (“”) )
// 그래서 toDos 배열을 수정하고 싶다면 수정하는 함수를 써야함

// setToDos(currentArray => [toDo, ...currentArray]);
// -> ...을 써서 currentArray 배열에 toDo를 추가 시켜줌
// 어플리케이션이 시작될 때는 비어있는 배열을 가짐
// 첫 번째 to-do를 입력할 때 비어있는 currentArray 받아옴
// 이건 새로운 toDos가 input을 통해 작성한 toDo와
// 아무것도 들어있지 않은 빈 배열의 element가 더해지게 된다는 것
// 첫 번째 toDo 가 Hello라면 엔터를 눌러 실행됨
// 그리고 byebye라고 적으면
// currentArray에는 Hello 이미 있고 toDo는 byebye가 되는 것
// 그리고 currentArray는 Hello와 byebye를 가지고 있는 배열이 됨

// # 7.1
// map() 함수
// -> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
// 즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
// 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
// -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
// 다만 기존의 배열에 접근할 수 없게됨
// 그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
// map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
// map((item) => item.toUpperCase())
// 로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌

// 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
// map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
// 그래서
// {toDos.map((item, index) => {item})}
// 만들어줌
// 즉,
// {{item},{item},{item}...}
// 배열을 만들어 각자 고유의 key를 가지게 함

// # 7.2

// # 7.3

// # 7.4

// # 7.5

// # 7.6
// json 사용 1번째 방법
// const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
// const json = await response.json();

// json 사용 2번째 방법(쉬운 방법)
// const json = await (
//   await fetch(
//     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year",
//   )
// ).json();

// # 7.7
// react(레엑트) -> 퍼블리싱 변환
// npm i gh-pages 설치

// # 7.8

// # 7.9
// Array.prototype.slice()
// slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// String.prototype.substring()
// (slice외에도 substring이나 substr(비추천)를 사용해서도 문자열을 자를 수도 있습니다.)
// substring() 메소드는 string 객체의 시작 인덱스부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.

// 사용 예시
// ```
// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // expected output: "oz"

// console.log(str.substring(2));
// // expected output: "zilla"
// ```
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// # 7.10

// ----------------------------- //#7 [Update] Practice Movie App  -----------------------------

// -----------------------------  -----------------------------

// # 1.1

// ----------------------------- // -----------------------------

// -----------------------------  -----------------------------

// # 1.1

// ----------------------------- // -----------------------------

// -----------------------------  -----------------------------

// # 1.1

// ----------------------------- // -----------------------------

// -----------------------------  -----------------------------

// # 1.1

// ----------------------------- // -----------------------------
