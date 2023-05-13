import React, { useState } from "react";
import { createUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    fullname: "",
    roll_no: "",
    course: "",
    semester: "",
    username: "",
    email: "",
    password: "",
    error: {
      username: "",
      password: "",
    },
  });

  const handleNext = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setCurrentStep(currentStep + 1);
    }
    setValidated(true);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "fullname") {
      if (!/^[a-zA-Z\s]{4,}$/.test(value)) {
        error = "Full name must contain at least 2 alphabetical characters";
      }
    } else if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
    } else if (name === "username") {
      if (!/^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,}$/.test(value)) {
        error =
          "Username must have alphabets and numbers only with a minimum length of 4 characters";
      }
    } else if (name === "password") {
      if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
        error =
          "Password must have alphabets, numerals, and at least one special character with a minimum length of 8 characters";
      }
    }

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
      error: {
        ...prevData.error,
        [name]: error,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user, token } = await createUser(userData);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate(user.role === "admin" ? "/admin" : "/student", {
        replace: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Sign In</h3>

              <div className="step">{currentStep}</div>

              <form onSubmit={handleSubmit} noValidate validated={validated}>
                {currentStep === 1 && (
                  <>
                    <div
                      className={`form-floating mb-3 ${
                        userData.error?.fullname ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="text"
                        className={`form-control shadow ${
                          userData.error?.fullname ? "is-invalid" : ""
                        }`}
                        id="fullname"
                        name="fullname"
                        placeholder="Enter fullname"
                        value={userData.fullname}
                        onChange={handleUserData}
                      />
                      <label htmlFor="fullname" className="form-label-sm">
                        Full name
                      </label>
                      {userData.error?.fullname && (
                        <small className="error-message">
                          {userData.error.fullname}
                        </small>
                      )}
                    </div>
                    <div className="d-flex mb-3">
                      <div className="form-floating me-1">
                        <input
                          type="text"
                          className="form-control shadow"
                          id="course"
                          name="course"
                          placeholder="Enter you course"
                          value={userData.course}
                          onChange={handleUserData}
                        />
                        <label htmlFor="course" className="form-label-sm">
                          Course
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control shadow"
                          id="semester"
                          name="semester"
                          placeholder="Enter your roll no"
                          value={userData.semester}
                          onChange={handleUserData}
                        />
                        <label htmlFor="semester" className="form-label-sm">
                          Semester
                        </label>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control shadow"
                        id="roll_no"
                        name="roll_no"
                        placeholder="Enter roll no"
                        value={userData.roll_no}
                        onChange={handleUserData}
                      />
                      <label htmlFor="roll_no" className="form-label-sm">
                        Roll No.
                      </label>
                    </div>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div
                      className={`form-floating mb-3 ${
                        userData.error?.username ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="text"
                        className={`form-control shadow ${
                          userData.error?.username ? "is-invalid" : ""
                        }`}
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        value={userData.username}
                        onChange={handleUserData}
                      />
                      <label htmlFor="username" className="form-label-sm">
                        Username
                      </label>
                      {userData.error?.username && (
                        <small className="error-message">
                          {userData.error.username}
                        </small>
                      )}
                    </div>
                    <div
                      className={`form-floating mb-3 ${
                        userData.error?.email ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="text"
                        className={`form-control shadow ${
                          userData.error?.email ? "is-invalid" : ""
                        }`}
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={userData.email}
                        onChange={handleUserData}
                      />
                      <label htmlFor="email" className="form-label-sm">
                        Email
                      </label>
                      {userData.error?.email && (
                        <small className="error-message">
                          {userData.error.email}
                        </small>
                      )}
                    </div>
                    <div
                      className={`form-floating mb-3 ${
                        userData.error?.password ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="password"
                        className={`form-control shadow ${
                          userData.error?.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        value={userData.password}
                        onChange={handleUserData}
                      />
                      <label htmlFor="password" className="form-label-sm">
                        Password
                      </label>
                      {userData.error?.password && (
                        <small className="error-message">
                          {userData.error.password}
                        </small>
                      )}
                    </div>

                    <button
                      className="btn btn-primary mt-3"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button className="btn btn-primary ms-3 mt-3" type="submit">
                      Submit
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
