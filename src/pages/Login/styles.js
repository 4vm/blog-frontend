import styled from 'styled-components';

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
`;

export const LoginCard = styled.div`
  background: var(--code-bg);
  border: 1px solid var(--border);
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Title = styled.h2`
  color: var(--text-h);
  margin-bottom: 30px;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-h);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--text);
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  padding: 14px;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: filter 0.2s, transform 0.1s;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.98);
  }
`;