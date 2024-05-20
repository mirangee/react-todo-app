export const initialState = {
  userValue: {
    userName: '',
    password: '',
    email: '',
  },
  message: {
    userName: '',
    password: '',
    passwordCheck: '',
    email: '',
  },
  correct: {
    userName: false,
    password: false,
    passwordCheck: false,
    email: false,
  },
};

// 회원 가입 쪽에서 여러 상태값을 중앙 집중화해서 처리할 리듀서 함수
export default reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_VALUE':
      return {
        ...state,
        userValue: {
          ...state.userValue,
          [action.key]: action.value,
        },
      };

    case 'SET_MESSAGE':

    case 'SET_CORRECT':

    default:
      break;
  }
};
