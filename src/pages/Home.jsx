import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { PostCard } from '../components/PostCard';

export function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchPosts(query = '') {
    setLoading(true);
    try {
      const endpoint = query ? `/search?q=${query}` : '/'; 
      const response = await api.get(endpoint);
      
      console.log("Chegou da API:", response.data);

      if (Array.isArray(response.data)) {
        const publishedPosts = response.data.filter(post => post.published === true);
        setPosts(publishedPosts);
      } else {
        console.error("O back-end não retornou uma lista válida.");
        setPosts([]);
      }
      
    } catch (error) {
      console.error("Erro ao buscar as postagens:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []); 

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPosts(searchTerm);
  };

  return (
    <div style={{ padding: '20px', width: '100%', boxSizing: 'border-box' }}>
      <h1>Últimas Postagens</h1>
      
      <form onSubmit={handleSearch} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Buscar postagens..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            padding: '10px', 
            width: '100%', 
            borderRadius: '4px', 
            border: '1px solid var(--border)',
            background: 'var(--code-bg)',
            color: 'var(--text-h)'
          }}
        />
        <button type="submit" style={{ 
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: 'var(--accent)',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>
          Buscar
        </button>
      </form>

      {loading ? (
        <p>Carregando postagens...</p>
      ) : (
        <div className="posts-grid" style={{ textAlign: 'left' }}>
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map(post => <PostCard key={post.id} post={post} />)
          ) : (
            <p>Nenhuma postagem encontrada.</p>
          )}
        </div>
      )}
    </div>
  );
}