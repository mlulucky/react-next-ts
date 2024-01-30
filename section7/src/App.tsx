import { useCallback, useEffect, useReducer, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList, { Todo } from "./components/TodoList";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "알고리즘 공부",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "네트워크 공부",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "프론트,백엔드 공부",
    createDate: new Date().getTime(),
  },
];

type ActionType =
  | { type: "CREATE"; data: Todo }
  | { type: "UPDATE"; data: number }
  | { type: "DELETE"; data: number };

function reducer(state: Todo[], action: ActionType) {
  // 실제 state 변경을 처리
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );
    }
    case "DELETE": {
      return state.filter((todo) => todo.id !== action.data);
    }
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

	useEffect(()=>{
		console.log("App");
	})

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        // newTodo
        id: idRef.current++, // idRef.current 는 3
        isDone: false,
        content,
        createDate: new Date().getTime(),
      },
    });
  }, []);
	// 의존성 배열에 아무것도 넣지 않아도 되는 이유
	// idRef.current -> useRef 참조값 -> 컴포넌트 렌더링으로 변경되지 않는다.

  const onUpdate = useCallback((targetId: number) => {
    dispatch({ type: "UPDATE", data: targetId });
  }, []);
	// 의존성 배열에 아무것도 넣지 않아도 되는 이유
	// dispatch 함수는 useReducer 를 통해 생성 -> 컴포넌트 렌더링으로 변경되지 않는다.


  const onDelete = useCallback((targeId: number) => {
    dispatch({ type: "DELETE", data: targeId });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

// state Lifting
