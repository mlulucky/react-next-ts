import { ChangeEvent, memo, useEffect, useRef, useState } from "react";

function TodoEditor({onCreate}:{onCreate: (content: string) => void}) {
	const [content, setContent] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	}
	useEffect(()=>{
		console.log("TodoEditor");
	});

	const todoCreate = () => {
		if(content==="") {
			inputRef.current?.focus();
			return;
		}
		onCreate(content); // 할일 추가 // content -> input 창에 입력한 값 -> state 로 관리
		setContent("");
	}
	
	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.keyCode === 13) { // 엔터 누를때
			todoCreate();
		}
	}
	// onKeyDown - 키보드 누르는 이벤트 객체
	// e.keyCode === 13 -> 엔터키 

	// onCreate 개선사항
	// 1. 할일 추가하면 input 창 비워지기
	// 2. 엔터를 쳐도 할일 추가되기
	// 3. 입력을 안하면 추가가 안되고, focus 주기

	return (
		<div className="TodoEditor">
			<input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo..."/>
			<button onClick={todoCreate}>추가</button>
		</div>
	)
}

export default memo(TodoEditor);