import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { FaArrowLeft } from 'react-icons/fa';
import {
  HeaderContainer,
  LeftSection,
  Logo,
  Nav,
  BackButton,
  ButtonAdmin,
  ButtonCreate,
  ButtonLogin,
  ButtonLogout
} from './styles';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return { isLoggedIn: true, role: decoded.role };
      } catch {
        return { isLoggedIn: false, role: null };
      }
    }
    return { isLoggedIn: false, role: null };
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({ isLoggedIn: false, role: null });
    window.location.href = '/login';
  };

  const isNotHome = location.pathname !== '/';
  const isLoginPage = location.pathname === '/login';

  return (
    <HeaderContainer>
      <LeftSection>
        {isNotHome && (
          <BackButton 
            onClick={() => {
              const token = localStorage.getItem('token');
              if (token) {
                navigate(-1);
              } else {
                navigate('/');
              }
            }} 
            title="Voltar"
          >
            <FaArrowLeft />
          </BackButton>
        )}
        <Logo onClick={() => navigate('/')}>
          Blog App
        </Logo>
      </LeftSection>

      <Nav>
        {auth.isLoggedIn && auth.role === 'TEACHER' && (
          <>
            <ButtonAdmin onClick={() => navigate('/admin')}>
              Painel Admin
            </ButtonAdmin>
            
            <ButtonCreate onClick={() => navigate('/create')}>
              Novo Post
            </ButtonCreate>
          </>
        )}

        {auth.isLoggedIn ? (
          <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
        ) : (
          !isLoginPage && (
            <ButtonLogin onClick={() => navigate('/login')}>
              Login
            </ButtonLogin>
          )
        )}
      </Nav>
    </HeaderContainer>
  );
};