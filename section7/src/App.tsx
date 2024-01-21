import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

function App() {
	const mockData = [
		{
			id: 0,
			isDone: true,
			content: "알고리즘 공부",
			createDate: new Date().getTime()
		},
		{
			id: 1,
			isDone: false,
			content: "네트워크 공부",
			createDate: new Date().getTime()
		},
		{
			id: 2,
			isDone: true,
			content: "프론트,백엔드 공부",
			createDate: new Date().getTime()
		}
	]

	const [todos, setTodos] = useState(mockData);
	const idRef = useRef(3);

	const onCreate = (content: string) => {
		const newTodo = {
			id: idRef.current++, // idRef.current 는 3  
			isDone: false,
			content,
			createDate: new Date().getTime()
		}
		setTodos([...todos, newTodo])
	}

	const onUpdate = (targetId: number) => {
		setTodos(todos.map(todo => 
			todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
		))
	}

	const onDelete = (targeId: number) => {
		setTodos(todos.filter(todo => todo.id !== targeId));
	}

  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App

// state Lifting

