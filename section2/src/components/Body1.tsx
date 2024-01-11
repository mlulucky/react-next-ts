import '../Body.css';

export default function Body() {
  const a = 10;
  const string = "hello";
  const bool = true;
  const obj = {
    a: 1,
  };
  const func = () => {
    return "func";
  };
	const user = {
		name: "ruby",
		isLogin: true
	}

	// 조건부 렌더링
	// if(user.isLogin) {
	// 	return <div>로그아웃</div>
	// }
	// else {
	// 	return <div>로그인</div>
	// }

  return (
    // 자바스크립트 표현식을 화면에 렌더링 할 수 있다.
    // 하나의 최상위 태그를 갖는다.
    <div className='body'>
    {/* <div style={{backgroundColor: "green"}}> */}
      <h1>Body</h1>
      <h2>{10}</h2>
      <h2>{a}</h2>
      <h2>{a % 2 === 0 ? "짝수" : "홀수"}</h2>
			
			{/* 삼항연산자 조건부 렌더링 */}
      {a % 2 === 0 ? (<div>{a}는 짝수</div>) : (<div>{a}는 홀수</div>)}
      {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
			
			<h2>{string}</h2>
      <h2>{bool}</h2>
      {/* <h2>{obj}</h2> */}
      <h2>{obj.a}</h2>
      <h2>{func()}</h2>
    </div>
  );
}
