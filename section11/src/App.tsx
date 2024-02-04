import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";
function App() {
	const nav = useNavigate();
	const onClick = () => {
		nav("/search");
	}
	// http://localhost:5173/country/KOR
	// url 파라미터 /KOR 를 사용하기 위해서는 경로에 파라미터를 명시하기
	// /:code
	
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
			<div>
				<Link to={"/"}>Home</Link>
				<Link to={"/search"}> Search</Link>
				<Link to={"/country"}> Country</Link>
			</div>
			<button onClick={onClick}>search 페이지 이동</button>
    </>
  );
}

// 🍒 컴포넌트의 페이지 라우팅
// Route : 경로와 리액트 컴포넌트를 맵핑
// Routes : 경로에 해당하는 Route 의 element 컴포넌트를 렌더링
// path == * 은 와일드 카드, 그외 모두에 해당


// 🍒 페이지 이동
// 1. Link 컴포넌트 : a 태그와 동일 // 페이지 이동 // 클라이언트 사이드 렌더링 // 깜빡임,새로고침 X
// a 태그 : 서버에 페이지를 요청 // 페이지 이동 // 클라이언트 사이드렌더링X // 깜빡임, 새로고침 O

// 2. useNavigate() : 페이지를 이동시키는 함수를 반환 시킨다.
// const nav = useNavigate(); -> nav("/search")

export default App;
