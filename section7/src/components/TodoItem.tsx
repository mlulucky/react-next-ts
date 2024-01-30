import { memo } from "react";
import { Todo } from "./TodoList";

function TodoItem({
  id,
  isDone,
  content,
  createDate,
  onUpdate,
  onDelete,
}: Todo & { onUpdate: (id: number) => void; onDelete: (id: number) => void }) {
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
