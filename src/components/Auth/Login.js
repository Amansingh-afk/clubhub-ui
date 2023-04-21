import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control shadow"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label
                    htmlFor="username"
                    className="form-label-sm"
                  >
                    Username
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control shadow"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="form-label-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input shadow"
                    id="remember"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="remember"
                    style={{ fontSize: "small" }}
                  >
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="float-end"
                    style={{ fontSize: "small" }}
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block shadow"
                  style={{ width: "100%" }}
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
              <div className="text-center mt-3">
                <span>New here?</span>
                <a href="#"> Create an Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
