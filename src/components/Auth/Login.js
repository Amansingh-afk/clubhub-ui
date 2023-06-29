import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await login({
        username: username,
        password: password,
      });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate(
        user.role === "admin"
          ? "/admin"
          : user.role === "super_admin"
          ? "/super-admin"
          : "/student",
        { replace: true }
      );
    } catch (error) {
      setErrorMsg(error.response.data.message);
      console.error(error);
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
                <p className="text-danger fs-6">{errormsg}</p>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control shadow ${
                      errormsg.length ? "is-invalid" : ""
                    }`}
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label htmlFor="username" className="form-label-sm">
                    Username
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={`form-control shadow ${
                      errormsg.length ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password" className="form-label-sm">
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
                  <Link
                    to="/forgot-password"
                    className="float-end"
                    style={{ fontSize: "small" }}
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block shadow w-100"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
              <div className="text-center mt-3">
                <span>New here?</span>
                <Link to="/sign-in"> Create an Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
