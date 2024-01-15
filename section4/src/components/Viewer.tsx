export default function Viewer({count}: {count: number}) {
	return (
		<div>
			<p>현재 카운트 : </p>
			<h1>{count}</h1>
		</div>
	)
}