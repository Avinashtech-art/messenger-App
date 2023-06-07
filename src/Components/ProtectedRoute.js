import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/hooks";

const ProtectedRoute = (props) => {
  const { isUserAuthorized } = useAuth();

  return <> {isUserAuthorized ? props.children : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
