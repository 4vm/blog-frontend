import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

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
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
      }
    }

    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Erro ao carregar o post:", error);
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
    <main style={styles.container}>
      <article style={styles.article}>
        <div style={styles.headerRow}>
          <h1 style={styles.title}>{post.title}</h1>
          
          {userRole === 'TEACHER' && (
            <button 
              onClick={() => navigate(`/edit/${id}`)} 
              style={styles.editButton}
            >
              Editar Postagem
            </button>
          )}
        </div>
        
        <div style={styles.meta}>
          <span>Autor: <strong style={{ color: 'var(--accent)' }}>{post.authorName || post.author?.name || 'Autor Desconhecido'}</strong></span>
          <span style={styles.separator}>|</span>
          <span>{post.published ? 'Publicado' : 'Rascunho'}</span>
        </div>

        <div style={styles.content}>
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} style={styles.paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

const styles = {
  container: { 
    width: '100%', 
    maxWidth: '1000px',
    margin: '40px auto', 
    padding: '0 20px',
    boxSizing: 'border-box'
  },
  article: { 
    backgroundColor: 'var(--code-bg)',
    padding: '40px', 
    borderRadius: '12px', 
    border: '1px solid var(--border)',
    textAlign: 'left'
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px',
    gap: '20px'
  },
  title: { 
    fontSize: '2.5rem', 
    color: 'var(--text-h)', 
    margin: 0, 
    lineHeight: '1.2',
    flex: 1
  },
  editButton: {
    backgroundColor: 'var(--accent)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap'
  },
  meta: { 
    color: 'var(--text)', 
    fontSize: '0.95rem', 
    marginBottom: '30px', 
    borderBottom: '1px solid var(--border)', 
    paddingBottom: '15px' 
  },
  separator: { margin: '0 15px', color: 'var(--border)' },
  content: { 
    lineHeight: '1.8', 
    color: 'var(--text-h)', 
    fontSize: '1.2rem'
  },
  paragraph: { 
    marginBottom: '25px',
    wordWrap: 'break-word'
  }
};