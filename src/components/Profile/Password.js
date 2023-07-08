import React, { useState } from "react";
import { toast } from "react-toastify";
import { updatePassword } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!oldPassword.length || !newPassword.length || !confirmPassword.length) {
      setError(true);
      toast.warning("All fields are required");
      return;
    }
    const data = {
      oldPassword,
      newPassword,
      confirmPassword,
    };

    try {
      await updatePassword(data);
      toast.success("Password updated succesfully");
      navigate("/profile");
    } catch (err) {
      setError(true);
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-lg-5">
          <h5 className="text-center mt-4">Change your passwrod</h5>
          <form className="py-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="oldPasswrd"
                placeholder="Old password"
                className={`form-control shadow ${error ? "is-invalid" : ""}`}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <label htmlFor="oldPasswrd" className="form-label-sm text-muted">
                Old password
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="newPasswrd"
                placeholder="New password"
                className={`form-control shadow ${error ? "is-invalid" : ""}`}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label htmlFor="newPasswrd" className="form-label-sm text-muted">
                New Password
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="confirmPassword"
                placeholder="Confirm Password"
                className={`form-control shadow ${error ? "is-invalid" : ""}`}
                value={confirmPassword}
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
              type="submit"
              className="btn btn-success w-100 shadow rounded p-2"
              onClick={handleSubmit}
            >
              Change password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
