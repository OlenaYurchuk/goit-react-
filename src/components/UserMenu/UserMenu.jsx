import { useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  )
}