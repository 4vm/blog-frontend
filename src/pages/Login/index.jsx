import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  LoginContainer, 
  LoginCard, 
  Title, 
  Form, 
  Input, 
  Button 
} from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.user.name); 
      
      alert('Login realizado com sucesso!');
      
      navigate('/');
      window.location.reload(); 
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Acessar Conta</Title>
        <Form onSubmit={handleLogin}>
          <Input 
            type="email" 
            placeholder="E-mail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}