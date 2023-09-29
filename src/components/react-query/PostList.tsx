import axios from "axios";
import usePosts from "../../hooks/usePosts";
import { useState } from "react";

const PostList = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

  const { data: blogPosts, error, isLoading } = usePosts(selectedUserId);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(event) => {
          console.log(event.target.value);
          setSelectedUserId(
            event.target.value ? parseInt(event.target.value) : undefined
          );
        }}
        value={selectedUserId}
      >
        <option value="">All</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul className="list-group">
        {blogPosts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
