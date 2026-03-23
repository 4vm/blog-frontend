import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  PageTitle,
  Form,
  FieldGroup,
  LabelRow,
  Label,
  CharCounter,
  Input,
  Textarea,
  SubmitButton
} from './styles';

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
          console.error("Erro ao carregar post:", error);
          alert("Não foi possível carregar os dados.");
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
        authorName,
        published: true 
      };

      if (isEditMode) {
        await axios.put(`http://localhost:3000/posts/${id}`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Postagem atualizada!');
      } else {
        await axios.post('http://localhost:3000/posts', payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Postagem criada!');
      }

      navigate('/'); 
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao enviar a postagem.');
    }
  };

  return (
    <Container>
      <PageTitle>{isEditMode ? 'Editar Postagem' : 'Nova Postagem'}</PageTitle>
      
      <Form onSubmit={handleSubmit}>
        <FieldGroup>
          <Label>Autor</Label>
          <Input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Nome do autor"
            maxLength={50}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <LabelRow>
            <Label>Título</Label>
            <CharCounter>{title.length} / 100</CharCounter>
          </LabelRow>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título"
            maxLength={100}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <LabelRow>
            <Label>Conteúdo</Label>
            <CharCounter>{content.length} / 1000</CharCounter>
          </LabelRow>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escreva o conteúdo aqui..."
            maxLength={1000}
            required
          />
        </FieldGroup>

        <SubmitButton type="submit">
          {isEditMode ? 'Salvar Alterações' : 'Publicar Agora'}
        </SubmitButton>
      </Form>
    </Container>
  );
}