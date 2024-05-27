import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/layout/Footer';
import Header from './Components/layout/Header';
import TodoTemplate from './Components/todo/TodoTemplate';
import Login from './Components/user/Login';
import Join from './Components/user/Join';
import AuthContextProvider from './utils/AuthContext';

function App() {
  return (
    // 데이터를 전달하고자 하는 자식 컴포넌트를 Provider로 감쌉니다.
    <AuthContextProvider>
      <div className="wrapper">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<TodoTemplate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
