import styled from 'styled-components';

export const PostContainer = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 15px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin: 40px auto;
    padding: 0 20px;
  }
`;

export const ArticleCard = styled.article`
  background-color: var(--code-bg);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-align: left;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
`;

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  color: var(--text-h);
  margin: 0;
  line-height: 1.2;
  flex: 1;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const EditButton = styled.button`
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    filter: brightness(1.1);
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const MetaInfo = styled.div`
  color: var(--text);
  font-size: 0.95rem;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

export const Separator = styled.span`
  margin: 0 10px;
  color: var(--border);
  display: inline;
`;

export const PostContent = styled.div`
  line-height: 1.8;
  color: var(--text-h);
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 25px;
  word-wrap: break-word;
`;