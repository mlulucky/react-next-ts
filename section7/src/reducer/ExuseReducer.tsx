import { useReducer } from "react"

// reducer 가 반환하는 값으로 state 값을 변경한다.
function reducer(state: number, action: {type: string; data: number}){
	// return 100; // state 가 100 으로 변경된다.
	if(action.type === "INCREASE") {
		return state + action.data;
	}
	else if (action.type === "DECREASE") {
		return state - action.data;
	}
	else {
		return state; // reducer 함수는 항상 상태를 반환해야한다. -> if 문에 없는 경우에도 상태를 반환해야한다.
	}
}

export default function ExuseReducer() {
	const [count, dispatch] = useReducer(reducer, 0); 
	// count : 상태
	// dispatch({액션객체}) / 액션객체 {type: "", data: ""}
	// useReducer -> reducer 함수를 실행시킨다.
	// reducer 함수 -> state, action 객체 를 인자로 받는다. / state 를 반환한다.
	return(
		<div>
			<h2>{count}</h2>
			<button onClick={()=>{dispatch({type: "INCREASE", data: 1})}}>+</button>
			<button onClick={()=>{dispatch({type: "DECREASE", data: 1})}}>-</button>
		</div>
	)
}