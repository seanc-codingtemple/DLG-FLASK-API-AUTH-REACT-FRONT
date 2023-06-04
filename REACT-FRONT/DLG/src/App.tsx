import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DefaultHome from './pages/DefaultHome';
import './index.css'

function App() {
          return (
            <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultHome />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* <Route path="/logout" element={<Logout />} />
          <Route path="/user/:username" element={<UserPage />} /> */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>


     
    </>
  )
}

export default App
