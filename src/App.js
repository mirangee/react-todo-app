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
      <Header />

      <Routes>
        <Route path="/" element={<TodoTemplate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
