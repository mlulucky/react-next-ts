import { useSearchParams } from "react-router-dom"
export default function Search() {
	const [searchParams, setSearchParams] = useSearchParams();
	// const [쿼리스트링 정보를 보관하는 객체, 쿼리스트링 값을 변경하는 함수] = useSearchParams();
	// searchParams : 쿼리스트링의 값을 꺼내올수 있다.

	// 🍒 URL 쿼리스트링 값 꺼내오기
	// http://localhost:5173/search?p=kor
	// searchParams.get("p") == "kor"
	return (
		<div>Search {searchParams.get("p")}</div>
	)
}