import { useBackendAuth } from "../contexts/BackendAuthContext";

const LoginButton = () => {
  const { login } = useBackendAuth();

  const handleLogin = async () => {
    const email = window.prompt("Email") || "";
    const password = window.prompt("Password") || "";
    if (!email || !password) return;
    try {
      await login(email, password);
    } catch (err: any) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <button onClick={handleLogin} className="button login">
      Log In
    </button>
  );
};

export default LoginButton;
