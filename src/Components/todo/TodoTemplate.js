import React, { useEffect, useState } from 'react';
import '../../scss/TodoTemplate.scss';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const TodoTemplate = () => {
  // 백엔드 서버에 할 일 목록(json)을 요청(fetch)해서 받아와야 함.
  const API_BASE_URL = 'http://localhost:8181/api/todos';

  // todos 배열을 상태 관리
  const [todos, setTodos] = useState([]);

  /*
  TodoInput에게 todoText를 받아오는 함수
  자식 컴포넌트가 부모 컴포넌트에게 데이터를 전달할 때는
  일반적인 props 사용이 불가능
  부모 컴포넌트에서 함수를 선언(매개변수 꼭 선언) -> props로 함수를 전달
  자식 컴포넌트에서 전달받은 함수를 호출하면서 매개값으로 데이터를 전달
  */

  const addTodo = (todoText) => {
    const newTodo = {
      title: todoText,
    };

    fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          // status 코드에 따라 에러 처리를 다르게 진행하면 됨
          console.log('error occured!');
        }
      })
      .then((data) => {
        setTodos(data.todos);
      });
    // .catch(()=>{}); 예외처리를 마지막에 할 수도 있음
  };

  // 할 일 삭제 처리 함수
  const removeTodo = (id) => {
    fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((error) => {
        console.log('error: ', error);
        alert('잘못된 삭제 요청입니다!');
      });
  };

  // 할 일 체크 처리 함수
  const checkTodo = (id, done) => {
    fetch(API_BASE_URL, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id,
        done: !done,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      });
  };

  // 체크 안 된 할 일 갯수를 카운트 하는 함수
  const countRestTodo = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  useEffect(() => {
    // 페이지가 처음 렌더링 되면 동시에 할 일 목록을 서버에 요청해서 뿌려주기
    fetch(API_BASE_URL)
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          // status 코드에 따라 에러 처리를 다르게 진행하면 됨
          console.log('error occured!');
        }
      })
      .then((data) => {
        console.log(data);
        setTodos(data.todos);
      });
  }, []);

  return (
    <div className="TodoTemplate">
      <TodoHeader count={countRestTodo} />
      <TodoMain todoList={todos} remove={removeTodo} check={checkTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default TodoTemplate;
