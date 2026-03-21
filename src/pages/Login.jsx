import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.user.name); 
      
      alert('Login realizado com sucesso!');
      
      window.location.href = '/';
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: '20px' }}>Acessar Conta</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={styles.input}
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={styles.input}
          required 
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
    </div>
  );
};

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { 
    padding: '10px', 
    backgroundColor: '#007bff', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};