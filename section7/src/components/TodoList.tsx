import { ChangeEvent, useState } from "react";
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
	onDelete
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

  return (
    <div className="TodoList">
      <h2>Todos</h2>
      <input
        value={search}
        onChange={onSearchHandler}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
}
