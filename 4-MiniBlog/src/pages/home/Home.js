import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styles from './Home.module.css';
import PostDetail from '../../components/PostDetail';

const Home = () => {
  const [query, setQuery] = useState('');
  const Navigate = useNavigate();
  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments('posts', query);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Buscando por:', query);

    if (query) {
      return Navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {error && <p>Erro: {error}</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to={'/posts/create'} className="btn">
              Criar Primeiro Post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
