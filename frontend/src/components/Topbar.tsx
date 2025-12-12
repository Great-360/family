import { useBackendAuth } from "../contexts/BackendAuthContext";

interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Topbar({ setSidebarOpen }: TopbarProps) {
  const { user, isLoading, login, register, logout } = useBackendAuth();

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

  const handleRegister = async () => {
    const email = window.prompt("Email") || "";
    const password = window.prompt("Password") || "";
    const role = window.prompt("Role (GUEST/MEMBER/ADMIN)", "GUEST") || "GUEST";
    if (!email || !password) return;
    try {
      await register(email, password, role);
    } catch (err: any) {
      alert(err.message || "Registration failed");
    }
  };

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 w-full">
      <div className="flex items-center">
        <button
          className="md:hidden mr-4 p-2 rounded hover:bg-gray-200"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {isLoading ? (
          <span className="text-gray-600">Loading...</span>
        ) : user ? (
          <>
            <span className="text-gray-600">
              {user.person?.firstName ? `${user.person.firstName}` : user.email}
            </span>
            <button onClick={() => logout()} className="button logout">
              Log Out
            </button>
          </>
        ) : (
          <>
            <button onClick={handleLogin} className="button login">
              Log In
            </button>
            <button onClick={handleRegister} className="button register">
              Register
            </button>
          </>
        )}
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}
