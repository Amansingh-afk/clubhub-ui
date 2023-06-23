import { useState } from "react";

const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-5 col-md-6 col-sm-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="text-center mt-4">Forgot Password</h5>
              <div className="text-center mb-3 text-bold">
                Step {currentStep}
              </div>
              <form className="p-4">
                {currentStep === 1 && (
                  <>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="form-control shadow"
                        required
                      />
                      <label
                        htmlFor="username"
                        className="form-label-sm text-muted"
                      >
                        Username{" "}
                      </label>
                    </div>
                    <button className="btn btn-primary mt-3 w-100">
                      Get OTP
                    </button>
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
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        id="otp"
                        placeholder="otp"
                        className="form-control shadow"
                        required
                      />
                      <label htmlFor="otp" className="form-label-sm text-muted">
                        Enter OTP
                      </label>
                    </div>
                    <button className="btn btn-primary mt-3 w-100">
                      Submit OTP
                    </button>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        id="newPassword"
                        placeholder="New Password"
                        className="form-control shadow"
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
                    <button className="btn btn-primary mt-3 w-100">
                      Reset Password
                    </button>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handlePrevious}
                    >
                      Previous
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

export default ForgotPassword;
