
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login/LoginForm.jsx';
import RegisterForm from './pages/login/RegisterForm.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
