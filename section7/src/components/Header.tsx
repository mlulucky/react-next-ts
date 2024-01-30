import {memo, useEffect} from 'react';
function Header() {
	useEffect(()=>{console.log("Header")})
	return (
		<h2>{new Date().toLocaleDateString()}</h2>
	)
}

// memo(컴포넌트) -> 최적화 컴포넌트 반환
// props 변경 x -> 부모가 리렌더링되도, 리렌더링 되지 않는다.
export default memo(Header);