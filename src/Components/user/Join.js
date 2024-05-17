import {
  Link,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { API_BASE_URL, USER } from '../../Config/host-config';

const Join = () => {
  // 상태 변수로 회원가입 입력값 관리
  const [userValue, setUserValue] = useState({
    userName: '',
    password: '',
    email: '',
  });

  // 검증된 데이터를 각각의 상태변수에 저장해 주는 함수
  const saveInputState = ({ key, inputValue, flag, msg }) => {
    // 입력값 세팅
    setUserValue((oldValue) => {
      return { ...oldValue, [key]: inputValue };
    });

    // 메시지 세팅
    setMessage((oldMsg) => {
      return { ...oldMsg, [key]: msg }; // key 변수의 값을 프로퍼티 키로 활용하는 중
    });

    // 입력값 검증 완료 flag 세팅
    setCorrect((oldCorrect) => {
      return { ...oldCorrect, [key]: flag };
    });
  };

  // 검증 메시지에 대한 상태변수 관리
  // 입력값과 메시지는 따로 상태 관리(메시지는 백엔드로 보내줄 필요 없음)
  // 메시지 영역은 각 입력창마다 존재(이름, 이메일, 비밀번호...)하기에 객체 형태로 한번에 관리
  const [message, setMessage] = useState({
    userName: '',
    password: '',
    passwordCheck: '',
    email: '',
  });

  // 검증 체크 완료에 대한 상태변수 관리
  // 각각의 입력창마다 유효성 검증 상태를 관리해야 하기 때문에 객체로 선언
  // 상태 관리 이유는? 1. 스타일 부여, 2. 마지막에 회원가입 버튼 누를 때까지 검증 상태를 유지해야 하기 때문
  const [correct, setCorrect] = useState({
    userName: false,
    password: false,
    passwordCheck: false,
    email: false,
  });

  // 이름 입력창 체인지 이벤트 핸들러
  const nameHandler = (e) => {
    const nameRegex = /^[가-힣]{2,5}$/;
    const inputValue = e.target.value;

    // 입력값 검증
    let msg; // 검증 메시지를 저장할 변수
    let flag = false; // 입력값 검증 여부 체크 변수

    if (!inputValue) {
      msg = '유저 이름은 필수입니다.';
    } else if (!nameRegex.test(inputValue)) {
      msg = '이름은 2~5자 사이의 한글로 작성해 주세요.';
    } else {
      msg = '사용 가능한 이름입니다.';
      flag = true;
    }

    // saveInputState에게 이 핸들러에게 처리한 여러가지 값을 객체로 한번에 넘기기
    saveInputState({
      key: 'userName',
      inputValue,
      msg,
      flag,
    });
  };

  // 이메일 중복 체크 서버 통신 함수
  const fetchDuplicateCheck = (email) => {
    let msg = '';
    let flag = false;

    fetch(`${API_BASE_URL}${USER}/check?email=${email}`) // host-config.js에서 URL 관리 중
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          msg = '중복된 이메일입니다.';
        } else {
          msg = '사용 가능한 이메일입니다.';
          flag = true;
        }
        // 중복 확인 후 상태값 변경
        saveInputState({
          key: 'email',
          inputValue: email,
          msg,
          flag,
        });
      });
  };

  // 이메일 입력창 체인지 이벤트 핸들러
  const emailHandler = (e) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const inputValue = e.target.value;

    // 입력값 검증
    let msg; // 검증 메시지를 저장할 변수
    let flag = false; // 입력값 검증 여부 체크 변수

    if (!inputValue) {
      msg = '이메일은 필수값입니다!';
    } else if (!emailRegex.test(inputValue)) {
      msg = '올바르지 않은 이메일 형식입니다';
    } else {
      // 이메일 중복 체크
      fetchDuplicateCheck(inputValue);
    }

    // 상태 변경값 저장
    // 중복확인 후에만 상태 변경 하는 것이 아니다!
    // 입력창이 비거나 정규표현식 위반인 경우에도 상태는 변경되어야 한다.
    saveInputState({
      key: 'email',
      inputValue,
      msg,
      flag,
    });
  };

  // 패스워드 입력창 체인지 이벤트 핸들러
  const passwordHandler = (e) => {
    const pwRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    const inputValue = e.target.value;

    let msg = '';
    let flag = false;

    if (!pwRegex.test(inputValue)) {
      msg = '영문, 숫자, 특수문자 조합의 8~20자로 입력해주세요.';
    } else {
      msg = '사용 가능한 패스워드입니다.';
      flag = true;
    }

    // 상태값 변경 저장
    saveInputState({
      key: 'password',
      inputValue,
      msg,
      flag,
    });
  };

  // 패스워드 중복 확인창 체인지 이벤트 핸들러
  const passwordCheckHandler = (e) => {
    const password = userValue.password;
    console.log(password);
    const inputValue = e.target.value;

    let msg = '';
    let flag = false;

    if (password !== inputValue) {
      msg = '위 패스워드와 동일하게 입력해 주세요.';
    } else {
      msg = '위와 동일한 패스워드입니다.';
      flag = true;
    }

    // 상태값 변경 저장
    saveInputState({
      key: 'passwordCheck',
      inputValue,
      msg,
      flag,
    });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ margin: '200px auto' }}>
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              계정 생성
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="유저 이름"
              autoFocus
              onChange={nameHandler}
            />
            <span
              span
              style={correct.userName ? { color: 'green' } : { color: 'red' }}
            >
              {message.userName}
            </span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              onChange={emailHandler}
            />
            <span style={correct.email ? { color: 'green' } : { color: 'red' }}>
              {message.email}
            </span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={passwordHandler}
            />
            <span
              style={correct.password ? { color: 'green' } : { color: 'red' }}
            >
              {message.password}
            </span>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password-check"
              label="패스워드 확인"
              type="password"
              id="password-check"
              autoComplete="check-password"
              onChange={passwordCheckHandler}
            />
            <span
              style={
                correct.passwordCheck ? { color: 'green' } : { color: 'red' }
              }
            >
              {message.passwordCheck}
            </span>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: '#38d9a9' }}
            >
              계정 생성
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              이미 계정이 있습니까? 로그인 하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Join;
