/* eslint-disable react/prop-types */

const Post = ({post}) => {


  if (!post) {
    return null;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
