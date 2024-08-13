import React, { useEffect } from 'react';

import styles from './Search.module.css';

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import { Link, useLocation } from 'react-router-dom';

//components
import PostDetails from '../../components/PostDetail';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');
  const Location = useLocation();

  const tete = Location.query;

  const { document: posts } = useFetchDocuments('posts', search);

  useEffect(() => {
    console.log('Docs:', document);
    console.log('Posts:', posts);
  }, []);

  return (
    <div className={styles.search_container}>
      <h2>Resultados encontrados para: {search}</h2>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <>
            <p>não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
