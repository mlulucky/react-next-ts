import { ChangeEvent, useEffect, useMemo, useState } from "react";
import TodoItem from "./TodoItem";

export type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  createDate: number;
};

export default function TodoList({
  todos,
  onUpdate,
  onDelete,
}: {
  todos: Todo[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  // 검색어 기능
  // input 창에 입력한 값을 할일의 텍스트가 포함하는지 체크
  // 값이 같은지 체크 -> 값을 저장해둬야함 & 값에 따라서 화면 렌더링이 달라짐 -> state
  const [search, setSearch] = useState("");
  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

	useEffect(()=>{
		console.log("TodoList");
	})

  // 필터링된 todos
  const filterTodos = () => {
    if (search === "") {
      return todos; // 검색어가 없는 경우 전체 todos 반환
    }
    // 대소문자 구분없게끔
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  type TodosCount = {
    allCount: number;
    doneCount: number;
    leftCount: number;
  };
  // todo - 할일 개수 => 전체 / 완료 / 남은 개수
  const todosCount = (todos: Todo[]): TodosCount => {
		console.log("todosCount 호출");
		// todos 가 바뀌지 않는다면 재연산 할 필요가 없음
		// 연산 -> 값을 반환
    const allCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length; // 배열의 모든 요소를 순환
    const leftCount = allCount - doneCount;
		
    return { allCount, doneCount, leftCount }; 
  };

	// 잘못된 예)
	// useMemo(()=>{ 함수명() },[변경조건]) : 함수실행O, 반환값 반환X
	// -> 해결책) 반환값 명시 - return 키워드를 명시
	// useMemo(()=>{return 함수명() }, [변경조건]) == useMemo(()=> 함수명(), [변경조건]);

	// useMemo(함수명(),[변경조건]) : 함수 즉시실행 및 결과가 useMemo 의 인자가 됨. (하지만 useMemo 는 첫번째 인자로 함수를 받아야하므로 에러)
	
	// 🍒 useMemo : 첫번째 인자로 함수를 받고, 함수는 값을 반환해야함.
	// useMemo(()=> 함수명(),[변경조건]) > 함수가 반환하는 값을 반환



  const { allCount, doneCount, leftCount } = useMemo(()=>todosCount(todos), [todos]);

  return (
    <div className="TodoList">
      <h2>Todos</h2>
      <div>
        <span>전체할일: {allCount}</span>
        <span> 완료한일: {doneCount}</span>
        <span> 남은일: {leftCount}</span>
      </div>
      <input
        value={search}
        onChange={onSearchHandler}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
