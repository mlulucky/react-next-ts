import { useParams } from "react-router-dom"
export default function Country() {
	// 🍒 URL 파라미터 값 꺼내오기
	// useParams() : URL 파라미터 값을 객체로 저장한다.
	const params = useParams();
	// http://localhost:5173/country/KOR
	// "/country/:code" <- 경로에 url 파라미터 명시
	console.log(params) // {code: "KOR"}

	return (
		<div>Country {params.code}</div>
	)
}