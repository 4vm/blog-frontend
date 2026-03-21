import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Carregando painel...</p>;

  return (
    <main style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Painel Administrativo</h2>
        <button onClick={() => navigate('/create')} style={styles.createBtn}>+ Novo Post</button>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Título</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} style={styles.tr}>
                <td style={styles.td}>{post.title}</td>
                <td style={styles.td}>
                  <span style={post.published ? styles.published : styles.draft}>
                    {post.published ? 'Publicado' : 'Rascunho'}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.actions}>
                    <button 
                      onClick={() => navigate(`/edit/${post.id}`)} 
                      style={styles.editBtn}
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)} 
                      style={styles.deleteBtn}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const styles = {
  container: { 
    width: '95%', 
    maxWidth: '1100px', 
    margin: '40px auto', 
    padding: '20px',
    boxSizing: 'border-box' 
  },
  header: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: '30px' 
  },
  title: { color: 'var(--text-h)', margin: 0 },
  createBtn: { 
    padding: '10px 20px', 
    backgroundColor: '#28a745', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    fontWeight: 'bold' 
  },
  tableContainer: { 
    backgroundColor: 'var(--code-bg)', 
    borderRadius: '8px', 
    border: '1px solid var(--border)',
    overflow: 'hidden'
  },
  table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left' },
  tableHeader: { borderBottom: '2px solid var(--border)', backgroundColor: 'rgba(255,255,255,0.05)' },
  th: { padding: '15px', color: 'var(--text-h)' },
  tr: { borderBottom: '1px solid var(--border)' },
  td: { padding: '15px', color: 'var(--text)' },
  actions: { display: 'flex', gap: '10px' },
  editBtn: { 
    backgroundColor: 'var(--accent)', 
    color: 'white', 
    border: 'none', 
    padding: '6px 12px', 
    borderRadius: '4px', 
    cursor: 'pointer' 
  },
  deleteBtn: { 
    backgroundColor: '#dc3545', 
    color: 'white', 
    border: 'none', 
    padding: '6px 12px', 
    borderRadius: '4px', 
    cursor: 'pointer' 
  },
  published: { color: '#28a745', fontWeight: 'bold' },
  draft: { color: '#ffc107', fontWeight: 'bold' }
};