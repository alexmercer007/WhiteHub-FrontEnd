
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/login/LoginForm.jsx';
import RegisterForm from './pages/login/RegisterForm.jsx';
import PageFeed from './pages/user/PageFeed.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      {/* Redirigir "/" a "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
      
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/feed" element={<PageFeed/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
