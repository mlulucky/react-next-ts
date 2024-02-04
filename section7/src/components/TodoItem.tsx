import { memo, useContext } from "react";
import { Todo } from "./TodoList";
import { TodoDispatchContext } from "../TodoContext";

function TodoItem({
  id,
  isDone,
  content,
  createDate,
}: Todo) {

	const {onUpdate, onDelete} = useContext(TodoDispatchContext);

  const onChangeUpdate = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeUpdate} type="checkbox" checked={isDone} />
      <span className="content">{content}</span>
      <span className="date">{new Date(createDate).toLocaleDateString()}</span>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}

export default memo(TodoItem); // 최적화된 컴포넌트를 반환
