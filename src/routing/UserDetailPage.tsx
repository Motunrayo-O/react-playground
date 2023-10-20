import { useParams, useSearchParams, useLocation } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log("params: ", JSON.stringify(params));
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams ", JSON.stringify(searchParams));
  const location = useLocation();
  console.log("location ", location);

  return <p>User</p>;
};

export default UserDetailPage;
