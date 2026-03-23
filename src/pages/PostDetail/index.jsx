import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import {
  PostContainer,
  ArticleCard,
  HeaderRow,
  PostTitle,
  EditButton,
  MetaInfo,
  Separator,
  PostContent,
  Paragraph
} from './styles';

export function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role);
      } catch {
        setUserRole(null);
      }
    }

    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(response.data);
      } catch {
        alert("Post não encontrado!");
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px', color: 'var(--text)' }}>Carregando post...</p>;
  if (!post) return null;

  return (
    <PostContainer>
      <ArticleCard>
        <HeaderRow>
          <PostTitle>{post.title}</PostTitle>
          {userRole === 'TEACHER' && (
            <EditButton onClick={() => navigate(`/edit/${id}`)}>
              Editar Postagem
            </EditButton>
          )}
        </HeaderRow>
        
        <MetaInfo>
          <span>Autor: <strong style={{ color: 'var(--accent)' }}>{post.authorName || post.author?.name || 'Autor Desconhecido'}</strong></span>
          <Separator>|</Separator>
          <span>{post.published ? 'Publicado' : 'Rascunho'}</span>
        </MetaInfo>

        <PostContent>
          {post.content.split('\n').map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
        </PostContent>
      </ArticleCard>
    </PostContainer>
  );
}