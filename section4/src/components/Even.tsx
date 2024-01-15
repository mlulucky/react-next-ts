import { useEffect } from "react";

export default function Even() {
	// 언마운트 시 useEffect 실행
	useEffect(()=>{
		return ()=>{
			console.log("언마운트시 실행");
		}
	},[]);

	return (
		<h2>짝수입니다.</h2>
	)
}