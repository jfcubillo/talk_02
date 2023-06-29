import  { useContext } from 'react';

// Importar el contexto
import { PostContext } from '../pages/useContext';

const Post = () => {
  // Obtener el estado del contexto
  const {state} = useContext(PostContext);


  if (!state.post) {
    return null;
  }

  return (
    <div>
      <h2>{state.post.title}</h2>
      <p>{state.post.body}</p>
    </div>
  );
};

export default Post;
