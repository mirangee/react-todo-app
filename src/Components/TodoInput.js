import React, { useState } from 'react';
import '../scss/TodoInput.scss';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames';

const TodoInput = () => {
  // 입력창이 열리는 여부를 표현하는 상태값
  const [open, setOpen] = useState(false);

  // + 버튼 클릭 시 이벤트
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <div className="form-wrapper">
          <form className="insert-form">
            <input type="text" placeholder="할 일 입력 후 엔터를 누르세요!" />
          </form>
        </div>
      )}

      {/* 
        classnames 라이브러리 사용법(설치완료 후)
        1. classnames import하기
        2. 지정한 이름으로 호출하기 (cn이라는 이름으로 호출한 예)
          cn(파라미터1, 파라미터2)
          : 첫번째 파라미터는 항상 유지할 default 클래스
          : 두번째 파라미터는 논리 상태값
            => 논리 상태값이 true일 경우 해당 클래스 추가, false일 경우 제거
            {클래스 이름: 논리값}, 
             클래스 이름을 지정하지 않으면 논리값 변수명이 클래스 이름으로 사용됨.
       */}
      <button className={cn('insert-btn', { open })} onClick={onToggle}>
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
