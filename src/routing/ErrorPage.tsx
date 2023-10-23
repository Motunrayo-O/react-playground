import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oh nos!...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "Page does not exist"
          : "Soemthing has gone wrong with the app."}
      </p>
    </>
  );
};

export default ErrorPage;
