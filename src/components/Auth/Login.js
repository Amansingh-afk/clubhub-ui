import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("role", "admin");
      navigate("/admin", { replace: true });
    } else if (username === "student" && password === "student") {
      localStorage.setItem("token", "student-token");
      localStorage.setItem("role", "student");
      navigate("/student", { replace: true });
    } else {
      alert("Invalid credentials");
    }

  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;