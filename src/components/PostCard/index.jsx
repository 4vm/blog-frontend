import { Link } from 'react-router-dom';
import {
  CardArticle,
  Title,
  AuthorSection,
  AuthorName,
  Excerpt,
  ReadMoreButton
} from './styles';

export function PostCard({ post }) {
  return (
    <CardArticle>
      <Title>{post.title}</Title>
      
      <AuthorSection>
        <span>
          Escrito por: <AuthorName>{post.authorName || post.author?.name || 'Autor Desconhecido'}</AuthorName>
        </span>
      </AuthorSection>
      
      <Excerpt>
        {post.content || 'Sem descrição.'}
      </Excerpt>
      
      <Link to={`/post/${post.id}`}>
        <ReadMoreButton>
          Ler artigo completo
        </ReadMoreButton>
      </Link>
    </CardArticle>
  );
}