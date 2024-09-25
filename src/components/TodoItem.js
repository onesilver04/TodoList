import React from "react";
import "./TodoItem.css";
import deleteIcon from "./delete.png"; // 이미지 파일 경로 설정

const TodoItem = ({ text, checked, id, onToggle, onRemove }) => {
  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation(); // onToggle 실행되지 않도록 함
          onRemove(id); // Todo 항목 삭제
        }}
      >
        &times;
      </div>
      <div className={`todo-text ${checked ? "checked" : ""}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">&#x2713;</div>}
      {/* 삭제 이미지 버튼 */}
      <img
        src={deleteIcon}
        alt="삭제"
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation(); // onToggle 실행 방지
          onRemove(id); // Todo 항목 삭제
        }}
      />
    </div>
  );
};

export default TodoItem;
