import { useBackendAuth } from "../contexts/BackendAuthContext";

const LogoutButton = () => {
  const { logout } = useBackendAuth();
  return (
    <button onClick={() => logout()} className="button logout">
      Log Out
    </button>
  );
};

export default LogoutButton;
