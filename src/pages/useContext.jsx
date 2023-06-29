import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Post from '../components/WithContextPost';

// Crear el contexto
export const PostContext = React.createContext();

const initialState = {
  loading: true,
  error: false,
  post: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: false,
        post: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: true,
        post: null,
      };
    default:
      return state;
  }
};

const UseContextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };

    fetchData();
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Post</h1>
      <PostContext.Provider value={{state, dispatch}}>
        <Post />
      </PostContext.Provider>
    </div>
  );
};

export default UseContextPage;
