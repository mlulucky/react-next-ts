import { ReactNode } from "react";
import "../Button.css";

// 인자에서 바로 구조분해 할당
export default function Button({text, color, children}: {text: string; color?: string, children?:ReactNode}) {

// export default function Button(props: { text: string; color?: string }) {
  // props 가 객체로 묶여서 전달이 된다.
  // console.log(props);
	
	// 객체 구조분해 할당
	// const {text, color} = props;

	const onClick = (e) => {
		alert("버튼을 클릭했습니다.");
		console.log(e);
	}

  return (
		<>
			{/* <button className="button" style={{ backgroundColor: props.color }}>
				{props.text}
			</button>
			<button className="button" style={{ backgroundColor: color }}>
				{text}
			</button> */}
			<button onClick={onClick} className="button" style={{ backgroundColor: color }}>
				{children}
			</button>
		</>
  );

	// onClick 이벤트 함수에, 이벤트가 실행됬을때 실행할 함수를 전달!(함수 이름만 적는다) 
}
