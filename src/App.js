import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/layout/Footer';
import Header from './Components/layout/Header';
import TodoTemplate from './Components/todo/TodoTemplate';
import Login from './Components/user/Login';
import Join from './Components/user/Join';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
