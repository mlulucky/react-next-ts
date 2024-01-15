import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
			<Header/>
			<Body/>
			<Footer/>
    </>
  )
}

export default App

// 화면의 구성요소 - 컴포넌트
// 자바스크립트 클래스, 함수로 만들 수 있다.
// html 태그를 return 하는 것 == 컴포넌트
// 함수가 html 태그를 return 하는 것 == 함수 컴포넌트

// 컴포넌트 함수의 첫글자는 대문자로 한다. -> 일반 html 태그와 헷갈림

// 컴포넌트 화면에 렌더링 -> App 컴포넌트의 자식 컴포넌트로 위치시킨다
// 컴포넌트는 계층구조를 이룬다.