import { createContext } from "react";
import { Todo } from "./components/TodoList";

type TodoContextType = {
	onCreate: (content: string) => void;
	onUpdate: (id: number) => void;
	onDelete: (id: number) => void;	
}

// todos, onCreate, onUpdate, onDelete
export const TodoStateContext = createContext<Todo[]>([]);
export const TodoDispatchContext = createContext<TodoContextType>({onCreate: ()=> {}, onDelete: ()=> {}, onUpdate: ()=>{}});


