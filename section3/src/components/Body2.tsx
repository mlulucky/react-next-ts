import '../Body.css';
import Button from './Button';

export default function Body() {
	// props 로 보낼 데이터가 많은경우 -> props 를 객체로 묶어서 전달하기
	const buttonProps = {
		text: "1번 버튼",
		color: "red",
		a: 1,
		b: 2,
		c: 3
	}

	// props 로 태그, 컴포넌트도 전달할 수 있다 -> children

  return (
    <div className='body'>
			<h1>Body</h1>
			{/* 전개연산자 : 객체의 각 key 값을 개별로 전달한다. */}
			<Button {...buttonProps}/>
			{/* <Button text={"1번 버튼"} color={"red"} a={1} b={2} c={3}/> */}
			<Button text={"2번 버튼"}>
				<div>버튼</div>
			</Button>
			<Button text={"3번 버튼"}/>
    </div>
  );
	// props 가 객체로 묶여서 전달이 된다. -> {text="1번 버튼", color="red"}
}
