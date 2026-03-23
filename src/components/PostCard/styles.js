import styled from 'styled-components';

export const CardArticle = styled.article`
  border: 1px solid var(--border, #2e303a);
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  background-color: var(--code-bg, #1f2028);
  text-align: left;
  transition: transform 0.2s ease-in-out, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent, #c084fc);
  }
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
  color: var(--text-h, #f3f4f6);
  font-size: 1.4rem;
`;

export const AuthorSection = styled.div`
  color: var(--text, #9ca3af);
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

export const AuthorName = styled.strong`
  color: var(--accent, #c084fc);
`;

export const Excerpt = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  color: var(--text, #9ca3af);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReadMoreButton = styled.button`
  padding: 10px 15px;
  background-color: #6f42c1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;