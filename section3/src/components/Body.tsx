import "../Body.css";
import { ChangeEvent, useRef, useState } from "react";

export default function Body() {
  // input 값을 state 로 관리
  // 여러개의 state 를 하나의 state 로 관리 -> state 의 초기값을 객체로 전달
  const [state, setState] = useState({
    name: "",
    gender: "",
    info: "",
  });
	const nameRef = useRef<HTMLInputElement | null>(null); 
	// useRef : 레퍼런스 객체를 생성해서 반환

  // 여러개의 onChange 함수를 하나로 관리 -> 계산된 프로퍼티 사용
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name + " : " + e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

	const onSubmit = () => {
		// nameRef 가 현재 참조하는 객체 -> input 태그
		if(nameRef.current && !state.name) {
			nameRef.current.focus();
			return;
		}
		console.log(state);
		alert(`${state.name}님 가입을 축하드립니다.`);
	}


  return (
    <div className="body">
      <div>
        <input ref={nameRef} name={"name"} value={state.name} onChange={onChange} />
      </div>
      <div>
        <select name={"gender"} value={state.gender} onChange={onChange}>
          <option value="">밝히지 않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <div>
        <textarea
          name={"info"}
          value={state.info}
          onChange={onChange}
        ></textarea>
      </div>
			<div>
				<button onClick={onSubmit}>회원가입</button>
			</div>
    </div>

  );

  // e : 합성이벤트 객체
  // e.target : 이벤트가 발생한 html 태그 -> input태그
  // e.target.value : input 에 입력한 값

  // input 값 입력 -> onChange 이벤트 실행 -> setName 함수 실행 -> 컴포넌트 리렌더링 -> name 값 변경
}
