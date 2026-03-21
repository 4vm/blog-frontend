import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export function CreateEditPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/posts/${id}`);
          const { title, content, authorName } = response.data;
          setTitle(title);
          setContent(content);
          setAuthorName(authorName || '');
        } catch (error) {
          console.error("Erro ao carregar post para edição:", error);
          alert("Não foi possível carregar os dados do post.");
        }
      };
      fetchPost();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const payload = { 
        title, 
        content,
        authorName: authorName,
        published: true 
      };

      if (isEditMode) {
        await axios.put(`http://localhost:3000/posts/${id}`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Postagem atualizada com sucesso!');
      } else {
        await axios.post('http://localhost:3000/posts', payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Postagem criada com sucesso!');
      }

      navigate('/'); 
    } catch (error) {
      console.error('Erro ao salvar post:', error);
      alert('Erro ao enviar a postagem.');
    }
  };

  return (
    <main style={styles.container}>
      <h2 style={styles.title}>{isEditMode ? 'Editar Postagem' : 'Nova Postagem'}</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.field}>
          <label style={styles.label}>Autor</label>
          <input
            type="text"
            style={styles.input}
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Nome do autor da postagem"
            maxLength={50}
            required
          />
        </div>

        <div style={styles.field}>
          <div style={styles.labelRow}>
            <label style={styles.label}>Título</label>
            <span style={styles.counter}>{title.length} / 100</span>
          </div>
          <input
            type="text"
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título"
            maxLength={100}
            required
          />
        </div>

        <div style={styles.field}>
          <div style={styles.labelRow}>
            <label style={styles.label}>Conteúdo</label>
            <span style={styles.counter}>{content.length} / 1000</span>
          </div>
          <textarea
            style={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escreva o conteúdo aqui..."
            maxLength={1000}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          {isEditMode ? 'Salvar Alterações' : 'Enviar Postagem'}
        </button>
      </form>
    </main>
  );
}

const styles = {
  container: { 
    width: '95%',
    maxWidth: '1080px',
    margin: '30px auto', 
    padding: '40px', 
    border: '1px solid var(--border)', 
    borderRadius: '8px', 
    backgroundColor: 'var(--bg)',
    boxSizing: 'border-box',
    textAlign: 'left'
  },
  title: { 
    textAlign: 'center', 
    marginBottom: '30px',
    fontSize: '2rem',
    color: 'var(--text-h)' 
  },
  form: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' 
  },
  field: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '8px' 
  },
  labelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: { 
    fontWeight: 'bold',
    color: 'var(--text-h)'
  },
  counter: {
    fontSize: '0.8rem',
    color: 'var(--text)',
    opacity: 0.7
  },
  input: { 
    padding: '12px', 
    borderRadius: '4px', 
    border: '1px solid var(--border)', 
    fontSize: '1rem',
    background: 'var(--code-bg)',
    color: 'var(--text-h)',
    width: '100%',
    boxSizing: 'border-box'
  },
  textarea: { 
    padding: '12px', 
    borderRadius: '4px', 
    border: '1px solid var(--border)', 
    minHeight: '450px',
    fontFamily: 'inherit',
    background: 'var(--code-bg)',
    color: 'var(--text-h)',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'vertical'
  },
  button: { 
    padding: '15px 30px', 
    backgroundColor: '#28a745', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    fontWeight: 'bold',
    fontSize: '1.1rem',
    alignSelf: 'center'
  }
};