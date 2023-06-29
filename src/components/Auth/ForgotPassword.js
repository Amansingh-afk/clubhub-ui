import { useState } from "react";
import { forgotPassword } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  const getResetPasswordLink = async (e) => {
    e.preventDefault();
    if (!email.length) {
      setErrorMsg("Email cannot be empty. Please Enter your email");
    } else {
      try {
        await forgotPassword({ email });
        navigate("/login");
      } catch (err) {
        console.log(err.response);
        setErrorMsg(err.response.data.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-5 col-md-6 col-sm-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="text-center mt-4">Forgot Password</h5>
              <div className="text-center mb-3 text-bold">
                Enter your Email to get Password reset link.
              </div>
              <form className="p-4">
                <p className="text-danger">{errormsg}</p>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="form-control shadow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email" className="form-label-sm text-muted">
                    Email{" "}
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-100"
                  onClick={getResetPasswordLink}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
