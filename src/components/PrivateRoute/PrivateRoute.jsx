import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldredirect = !isLoggedIn && !isRefreshing;

  return shouldredirect ? <Navigate to={redirectTo} /> : Component;
}