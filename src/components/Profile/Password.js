import React from "react";

const Password = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h5 className="text-center mt-4">Change your passwrod</h5>
          <form className="p-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="oldPasswrd"
                placeholder="Old password"
                className="form-control shadow"
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
                className="form-control shadow"
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
                className="form-control shadow"
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
              className="btn btn-success w-100 shadow rounded"
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
