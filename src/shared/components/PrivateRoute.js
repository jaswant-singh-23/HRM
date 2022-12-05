import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { user: authUser } = useSelector((x) => x.auth);

  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}

function PrivateModeratorRoute({ children }) {
  const { user: authUser } = useSelector((x) => x.auth);
  const moderator = authUser.roles.includes("ROLE_MODERATOR");

  if (!authUser) {
    return <Navigate to="/login" />;
  }
  if (moderator) {
    return children;
  }
}

export { PrivateModeratorRoute };

function PrivateAdminRoute({ children }) {
  const { user: authUser } = useSelector((x) => x.auth);
  const admin = authUser.roles.includes("ROLE_ADMIN");

  if (!authUser) {
    return <Navigate to="/login" />;
  }
  if (admin) {
    return children;
  }
}

export { PrivateAdminRoute };
