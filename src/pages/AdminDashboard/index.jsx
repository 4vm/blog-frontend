import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  DashboardHeader,
  CreateBtn,
  TableWrapper,
  StyledTable,
  StatusBadge,
  ActionGroup,
  EditBtn,
  DeleteBtn
} from './styles';

export function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(response.data);
    } catch (error) {
      console.error("Erro ao carregar dashboard:", error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta postagem?")) {
      try {
        await axios.delete(`http://localhost:3000/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Postagem excluída!");
        fetchPosts();
      } catch (error) {
        alert("Erro ao excluir postagem.");
        console.error(error);
      }
    }
  };

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px', color: 'var(--text)' }}>Carregando painel...</p>;

return (
    <Container>
      <DashboardHeader>
        <h2>Painel Administrativo</h2>
        <CreateBtn onClick={() => navigate('/create')}>+ Novo Post</CreateBtn>
      </DashboardHeader>

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Título</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td data-label="Título">{post.title}</td>
                <td data-label="Status">
                  <StatusBadge published={post.published}>
                    {post.published ? 'Publicado' : 'Rascunho'}
                  </StatusBadge>
                </td>
                <td data-label="Ações">
                  <ActionGroup>
                    <EditBtn onClick={() => navigate(`/edit/${post.id}`)}>
                      Editar
                    </EditBtn>
                    <DeleteBtn onClick={() => handleDelete(post.id)}>
                      Excluir
                    </DeleteBtn>
                  </ActionGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </Container>
  );
}