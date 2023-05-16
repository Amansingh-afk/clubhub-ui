import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-6 mx-auto my-auto text-center">
          <h1 className="text-danger display-1 fw-bold">403</h1>
          <p className="lead">Forbidden</p>
          <p className="text-muted">
            You do not have permission to access this resource.
          </p>
          <Link className="btn btn-primary" to="/">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;
