import { Todo } from "./TodoList";

export default function TodoItem({ id, isDone, content, createDate, onUpdate, onDelete }: Todo & {onUpdate: (id: number)=> void, onDelete: (id: number)=> void}) {
	const onChangeUpdate = () => {
		onUpdate(id);
	}

	const onClickDelete = () => {
		onDelete(id);
	}

	return (
    <div className="TodoItem">
      <input onChange={onChangeUpdate} type="checkbox" checked={isDone} />
      <span className="content">{content}</span>
      <span className="date">{new Date(createDate).toLocaleDateString()}</span>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}
