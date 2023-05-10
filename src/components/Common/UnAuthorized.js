import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return (
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="col-md-6 mx-auto my-auto text-center">
          <h1 class="text-danger display-1 fw-bold">403</h1>
          <p class="lead">Forbidden</p>
          <p class="text-muted">
            You do not have permission to access this resource.
          </p>
          <Link class="btn btn-primary" to="/">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;
