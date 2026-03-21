import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('@BlogApp:user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('@BlogApp:token');

    if (storedToken) {
      api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('@BlogApp:token', token);
      localStorage.setItem('@BlogApp:user', JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser(user);
    } catch (error) {
      console.error("Erro na autenticação:", error);
      alert("Falha no login. Verifique as suas credenciais.");
    }
  }

  function signOut() {
    localStorage.removeItem('@BlogApp:token');
    localStorage.removeItem('@BlogApp:user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}