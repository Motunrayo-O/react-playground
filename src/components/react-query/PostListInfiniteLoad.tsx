import React from "react";
import usePostsInfinite from "../../hooks/usePostsInfinite";

const PostListInfinite = () => {
  const pageSize = 10;

  const {
    data: blogPosts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePostsInfinite({ pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {blogPosts.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary my-3 ms-3"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostListInfinite;
