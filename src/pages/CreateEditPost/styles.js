import styled from 'styled-components';

export const Container = styled.main`
  width: 95%;
  max-width: 850px;
  margin: 30px auto;
  padding: 20px;
  background-color: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 40px;
    margin: 50px auto;
  }
`;

export const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.8rem;
  color: var(--text-h);

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-weight: bold;
  color: var(--text-h);
  font-size: 1rem;
`;

export const CharCounter = styled.span`
  font-size: 0.8rem;
  color: var(--text);
  opacity: 0.7;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--accent);
  }
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
  font-size: 1rem;
  min-height: 250px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  resize: vertical;
  outline: none;
  line-height: 1.6;

  @media (min-width: 768px) {
    min-height: 400px;
  }

  &:focus {
    border-color: var(--accent);
  }
`;

export const SubmitButton = styled.button`
  padding: 15px 40px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  align-self: center;
  width: 100%;
  transition: filter 0.2s, transform 0.1s;

  @media (min-width: 600px) {
    width: auto;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;