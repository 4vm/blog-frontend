import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

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
    <header style={styles.header}>
      <div style={styles.leftSection}>
        {isNotHome && (
          <button onClick={() => navigate(-1)} style={styles.backButton}>
            Voltar
          </button>
        )}
        <h2 onClick={() => navigate('/')} style={styles.logo}>
          Blog App
        </h2>
      </div>

      <nav style={styles.nav}>
        {auth.isLoggedIn && auth.role === 'TEACHER' && (
          <>
            <button
              onClick={() => navigate('/admin')}
              style={styles.buttonAdmin}
            >
              Painel Admin
            </button>
            
            <button
              onClick={() => navigate('/create')}
              style={styles.buttonCreate}
            >
              + Novo Post
            </button>
          </>
        )}

        {auth.isLoggedIn ? (
          <button onClick={handleLogout} style={styles.buttonLogout}>Logout</button>
        ) : (
          !isLoginPage && (
            <button onClick={() => navigate('/login')} style={styles.buttonLogin}>
              Login
            </button>
          )
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white', alignItems: 'center' },
  leftSection: { display: 'flex', alignItems: 'center', gap: '15px' },
  logo: { cursor: 'pointer', margin: 0 },
  nav: { display: 'flex', gap: '10px', alignItems: 'center' },
  backButton: { background: '#4b5563', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' },

  buttonAdmin: { background: 'transparent', color: 'white', border: '1px solid white', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  buttonCreate: { background: '#6f42c1', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  buttonLogin: { background: '#28a745', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' },
  buttonLogout: { background: '#dc3545', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }
};