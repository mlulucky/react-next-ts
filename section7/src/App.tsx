import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList, { Todo } from "./components/TodoList";
import { TodoDispatchContext, TodoStateContext } from "./TodoContext";

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

  useEffect(() => {
    console.log("App");
  });

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


	// 🍒 App 컴포넌트가 리렌더링될때, Context.Provider 로 전달하는 onCreate, onUpdate, onDelete 객체를 재생성하지 않기 => useMemo 사용
	const memoizedDispatch = useMemo(()=> {
		return { // 객체를 반환
			onCreate, onUpdate, onDelete
		}
	},[]);


  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}
// TodoContext.Provider 로 감싸진 컴포넌트들
// -> TodoContext 로 부터 데이터를 공급받을 수 있다.
// value props 로 어떤 데이터를 전달할건지, 전달할 데이터를 입력

export default App;

