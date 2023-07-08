import React, { useState } from "react";
import { createUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";

import { courses } from "../../config";

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
        error = "Full name must contain at least 4 alphabetical characters";
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
      if (!/^.{8,}$/.test(value)) {
        error =
          "Password is too short.";
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
      if (err.response && err.response.data && err.response.data.message) {
        const errorMessage = err.response.data.message;
  
        if (errorMessage.includes("username")) {
          setUserData((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              username: errorMessage,
            },
          }));
        } else if (errorMessage.includes("email")) {
          setUserData((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              email: errorMessage,
            },
          }));
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Sign In</h3>

              <div className="text-center mb-3 text-bold">Step {currentStep}</div>

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
                        <small className="error-message text-danger">
                          {userData.error.fullname}
                        </small>
                      )}
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        id="course"
                        name="course"
                        className="form-select"
                        value={userData.course}
                        onChange={handleUserData}
                        required
                      >
                        <option value="">--Select Course--</option>
                        {courses.map((course) => (
                          <option key={course.name} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="course">Course:</label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        id="semester"
                        name="semester"
                        className="form-select"
                        value={userData.semester}
                        onChange={handleUserData}
                        required
                      >
                        <option value="">--Select Semester--</option>
                        {userData.course ? (
                          courses
                            .find((c) => c.name === userData.course)
                            .semesters.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))
                        ) : (
                          <option value="--">--</option>
                        )}
                      </select>
                      <label htmlFor="semester">Semester:</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input data-toggle="tooltip" data-placement="top" title="Tooltip on top"
                        type="text"
                        className="form-control shadow"
                        id="roll_no"
                        name="roll_no"
                        placeholder="Enter roll no"
                        value={userData.roll_no}
                        onChange={handleUserData}
                        required
                      />
                      <label htmlFor="roll_no" className="form-label-sm" >
                        Roll No.
                      </label>
                    </div>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handleNext}
                    >
                      <i className="bx bx-chevron-right"></i>
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
                        <small className="error-message text-danger">
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
                        <small className="error-message text-danger">
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
                        <small className="error-message text-danger">
                          {userData.error.password}
                        </small>
                      )}
                    </div>

                    <button
                      className="btn btn-primary mt-3"
                      onClick={handlePrevious}
                    >
                      <i className="bx bx-chevron-left"></i>
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
