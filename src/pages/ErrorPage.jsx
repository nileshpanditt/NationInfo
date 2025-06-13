import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="error-detail">
          {error?.statusText || error?.message || "Something went wrong."}
        </p>
        <Link to="/" className="home-button">
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
