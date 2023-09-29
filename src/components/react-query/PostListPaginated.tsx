import { useState } from "react";
import usePostsPaginated from "../../hooks/usePostsPaginated";

const PostListPaginated = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: blogPosts,
    error,
    isLoading,
  } = usePostsPaginated({ page: currentPage, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {blogPosts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage == 1}
        className="btn btn-primary my-3"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-3"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostListPaginated;
