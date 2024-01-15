import { useEffect, useRef } from "react";

// 커스텀 훅
export default function useUpdate(cb: ()=>void) {
	// 🐥 컴포넌트 업데이트 - 최초마운트 시 실행 가드하기(막는법)
	const isMount = useRef(false);
	useEffect(()=>{
		if(!isMount.current) { // isMount 가 false 일때
			isMount.current = true;
			return;
		}
		console.log("최초마운트 실행X, 이후 업데이터");
		cb();
	})
}