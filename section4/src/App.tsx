import { useState, useEffect } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";

// 🐥 라이프 사이클
// 1. 마운트(탄생)
// 2. 업데이트(변화, 리렌더)
// 3. 언마운트(죽음)
// -> useEffect 로 제어가능

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput(); // 커스텀 훅

  useUpdate(() => {
    console.log("App 컴포넌트 업데이터");
  }); // 커스텀 훅

  const onClickButton = (value: number) => {
    setCount(count + value);
  };

  // 🍒 비동기로 동작하는 state(상태변화)함수의 결과를 바로바로 확인하려면
  // -> useEffect 로 변경된 값을 감지해서 확인

  // 콜백함수 : 다른함수의 인자로 전달되는 함수
  // useEffect(()=>{
  // 	console.log(`카운트: ${count}, 텍스트: ${text}`)
  // }, [count, text]); // 최초마운트 + 카운트, 텍스트가 변경될때 콜백함수 실행 // 의존성 배열 dependency array(deps)

  // // 컴포넌트 업데이트(리렌더링)시 useEffect 실행 -> 의존성 배열X
  // useEffect(()=>{
  // 	console.log("업데이트");
  // }) // 최초마운트시 실행

  // 컴포넌트 최초 마운트 될때 실행
  useEffect(() => {
    console.log("최초 마운트");
  }, []); // 최초 마운트시만 실행

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <input value={text} onChange={onChangeText} />
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
