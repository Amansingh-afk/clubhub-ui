import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../utils/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const data = {
      password,
      confirmPassword,
    };
    try {
      console.log(token);
      await resetPassword(data, token);
      navigate("/login");
    } catch (err) {
      setErrorMsg(err.response.data.message);
      console.log(err.response);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-5 col-md-6 col-sm-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="text-center mt-4">Reset Password</h5>
              <div className="text-center mb-3 text-bold">
                Reset your password :
              </div>
              <form className="p-4">
                <p className="text-danger fs-6">{errormsg}</p>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    id="newPassword"
                    placeholder="New Password"
                    className={`form-control shadow ${
                      errormsg.length ? "is-invalid" : ""
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="newPassword"
                    className="form-label-sm text-muted"
                  >
                    New Password
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className={`form-control shadow ${
                      errormsg.length ? "is-invalid" : ""
                    }`}                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="form-label-sm text-muted"
                  >
                    Confirm Password
                  </label>
                </div>
                <button
                  className="btn btn-primary mt-3 w-100"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
