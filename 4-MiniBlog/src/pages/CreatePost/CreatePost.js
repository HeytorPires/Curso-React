import styles from './CreatePost.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/authContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');

  const Navigate = useNavigate();
  const { insertDocument, response } = useInsertDocument('posts');
  const { user } = useAuthValue();

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // if (!user.displayName) {
    //   console.log(error);
    //   setFormError('User display name is missing.');
    //   return;
    // }

    // validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.');
    }

    // criar o array de tags
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    // checar todos os valores
    if (!title || !image || !tags || !tags) {
      setFormError('Por fabor, preencha todos os campos!');
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    Navigate('/');
  };

  return (
    <div className={styles.create_post}>
      <h1>Criar Post</h1>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input
            type="text"
            name="Title"
            required
            placeholder="pense num bom titulo..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que represente o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgulas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!loading && (
          <button className="btn" disabled={loading}>
            Cadastrar
          </button>
        )}
        {loading && (
          <button className="btn" disabled>
            Aguarde ...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
        {authError && <p className="error">{authError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
