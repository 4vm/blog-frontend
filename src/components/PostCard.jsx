import { Link } from 'react-router-dom';

export function PostCard({ post }) {
  return (
    <article style={{ 
      border: '1px solid #2e303a',
      borderRadius: '8px',
      padding: '20px', 
      margin: '15px 0',
      backgroundColor: '#1f2028',
      textAlign: 'left'
    }}>
      <h2 style={{ margin: '0 0 10px 0', color: '#f3f4f6' }}>{post.title}</h2>
      
      <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '15px' }}>
        <span>Escrito por: <strong style={{ color: '#c084fc' }}>{post.authorName || post.author?.name || 'Autor Desconhecido'}</strong></span>
      </div>
      
      <p style={{ marginBottom: '20px', lineHeight: '1.5', color: '#9ca3af' }}>
        {post.content ? post.content.substring(0, 100) + '...' : 'Sem descrição.'}
      </p>
      
      <Link to={`/post/${post.id}`}>
        <button style={{
          padding: '10px 15px',
          backgroundColor: '#6f42c1',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Ler artigo completo
        </button>
      </Link>
    </article>
  );
}