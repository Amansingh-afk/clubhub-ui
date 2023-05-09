import React, { useState } from "react";

const SignIn = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
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
                  <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control shadow"
                    id="username"
                    placeholder="Enter username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="username" className="form-label-sm">
                    Username
                  </label>
                  <button
                      className="btn btn-primary mt-3"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                </div>
                )}

                {currentStep === 2 && (
                  <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control shadow"
                    id="username"
                    placeholder="Enter username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="username" className="form-label-sm">
                    Username
                  </label>
                
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button className="btn btn-primary ms-3 mt-3" type="submit">
                      Submit
                    </button>
                  </div>
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
