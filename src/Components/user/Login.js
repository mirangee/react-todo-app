import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { API_BASE_URL as BASE, USER } from '../../Config/host-config'; // alias 붙이면 다른 이름으로도 사용 가능

const Login = () => {
  const REQUEST_URL = BASE + USER + '/signin';

  // 서버에 비동기 로그인 요청(AJAX 요청)
  const fetchLogin = () => {
    // 이메일, 비밀번호 입력 태그 취득하여 객체 만들기
    const loginInfo = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    fetch(REQUEST_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    // 입력값에 관련된 처리를 하고 싶다면 여기서 하면 됨.
    // 예제에서는 생략

    // 서버에 로그인 요청 전송
    fetchLogin();
  };

  return (
    <Container component="main" maxWidth="xs" style={{ margin: '200px auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={loginHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="email address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="on your password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
