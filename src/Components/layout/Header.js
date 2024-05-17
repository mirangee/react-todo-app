import React from 'react';
import '../../scss/Header.scss';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  /*
   리액트에선 a태그가 어울리지 않는다.
   a태그는 redirect되는 방식이기 때문
   그렇기에 react router의 Link를 사용해 a태그와 같은 효과를 낸다.
   실제로 다른 페이지로 이동하지는 않지만
   라우터가 리액트에게 URL 변화가 생겼다는 알림을 주면서
   해당 컴포넌트를 렌더링하게 한다.
   사용자에게는 마치 다른 페이지로 이동하는 것처럼 보이게 한다.
   라우터(중계 역할)
   라우터를 사용하기 위해선 index.js에서 컴포넌트를 BrowserRouter로 감싸주고
   App.js에서 Rountes로 컴포넌트를 사용한다. 
   route를 만들어 path에 어떤 컴포넌트를 보여줄지 작성하면 된다.
   Link의 to에 제시된 path에 따라 렌더링 컴포넌트가 달라진다.
*/
  return (
    <AppBar
      position="fixed"
      style={{
        background: '#38d9a9',
        width: '100%',
      }}
    >
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item flex={9}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4">오늘의 할일</Typography>
            </div>
          </Grid>

          <Grid item>
            <div className="btn-group">
              <Link to="/login">로그인</Link>
              <Link to="/join">회원가입</Link>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
