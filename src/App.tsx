
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from "./pages/auth/LoginForm";
import RegisterForm from './pages/auth/RegisterForm';

import FeedPage from "./pages/social/feed/FeedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      {/* Redirigir "/" a "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
      
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/feed" element={<FeedPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
