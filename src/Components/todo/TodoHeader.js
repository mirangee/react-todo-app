import React from 'react';
import '../../scss/TodoHeader.scss';

const TodoHeader = ({ count }) => {
  const today = new Date();

  // Date 객체의 포맷을 변환해 주는 toLocaleDateString 메서드
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  return (
    <header>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">
        {count() ? `할일 ${count()}개 있음` : '할일 없음'}
      </div>
    </header>
  );
};

export default TodoHeader;
