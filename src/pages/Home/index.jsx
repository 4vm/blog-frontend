import { useState, useEffect, useCallback } from 'react';
import { api } from '../../services/api';
import { PostCard } from '../../components/PostCard';

import { 
  HomeContainer, 
  Title, 
  SearchForm, 
  SearchInput, 
  SearchButton, 
  PostsGrid 
} from './styles';

export function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async (query = '') => {
    setLoading(true);
    try {
      const endpoint = query ? `/search?q=${query}` : '/'; 
      const response = await api.get(endpoint);
      
      if (Array.isArray(response.data)) {
        const publishedPosts = response.data.filter(post => post.published === true);
        setPosts(publishedPosts);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error("Erro ao buscar as postagens:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); 

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPosts(searchTerm);
  };

  return (
    <HomeContainer>
      <Title>Últimas Postagens</Title>
      
      <SearchForm onSubmit={handleSearch}>
        <SearchInput 
          type="text" 
          placeholder="Buscar postagens..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit">
          Buscar
        </SearchButton>
      </SearchForm>

      {loading ? (
        <p style={{ color: 'var(--text)' }}>Carregando postagens...</p>
      ) : (
        <PostsGrid>
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map(post => <PostCard key={post.id} post={post} />)
          ) : (
            <p style={{ color: 'var(--text)' }}>Nenhuma postagem encontrada.</p>
          )}
        </PostsGrid>
      )}
    </HomeContainer>
  );
}