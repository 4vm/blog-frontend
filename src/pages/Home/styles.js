import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: var(--text-h);
  margin-bottom: 25px;
  text-align: left;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;

  /* Mobile: input e botão um embaixo do outro */
  flex-direction: column;

  @media (min-width: 600px) {
    /* Desktop: um ao lado do outro */
    flex-direction: row;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid var(--border);
  background: var(--code-bg);
  color: var(--text-h);
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: var(--accent);
  }
`;

export const SearchButton = styled.button`
  padding: 12px 25px;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const PostsGrid = styled.div`
  display: grid;
  gap: 20px;
  text-align: left;

  /* Mobile: 1 coluna */
  grid-template-columns: 1fr;

  /* Tablet: 2 colunas */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 colunas */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;