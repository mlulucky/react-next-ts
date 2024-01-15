import "../Body.css";
import { useState } from "react";

function Lightbulb(props: { light: string }) {
	// props 값이 변경될때 컴포넌트가 다시 렌더링 된다.
  const { light } = props;
  return (
    <div>
      {light === "ON" ? (
        <div style={{ backgroundColor: "orange" }}>ON</div>
      ) : (
        <div style={{ backgroundColor: "gray" }}>OFF</div>
      )}
    </div>
  );
}

function StaticLightbulb() {
	// props 가 없어도
	// 부모컴포넌트가 렌더링을하면 자식컴포넌트도 다시 렌더링 된다.
	console.log('StaticLightbulb');
	return (
		<div style={{backgroundColor: "gray"}}>OFF</div>
	)
}

export default function Body() {
  // state
  // 컴포넌트 내부에서 선언 // 변경가능한 값 // 초기값 선언
  // 배열의 구조분해할당 [state값, 상태변화함수] = useState(state 초기값);
  const [light, setLight] = useState("OFF"); // 초기값 "OFF"
  // state 가 변경되면 컴포넌트가 다시 렌더링 된다.
	console.log(light);
  return (
    <div className="body">
			<Lightbulb light={light}/>
			<StaticLightbulb />
      {light}
      <button
        onClick={() => {
          setLight("ON"); // 새로운 state 값
        }}
      >
        켜기
      </button>
      <button
        onClick={() => {
          setLight("OFF");
        }}
      >
        끄기
      </button>
    </div>
  );
}
