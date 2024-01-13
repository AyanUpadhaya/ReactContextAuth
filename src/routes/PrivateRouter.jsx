import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Optionally, you can render a loading spinner or placeholder
    return <div>Loading...</div>;
  }

  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }
};

export default PrivateRouter;
