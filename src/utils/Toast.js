// Toast.js
import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const isMobileScreen = () => {
    return window.innerWidth < 992; // Adjust the breakpoint as needed
  };

  return (
    <div>
      <ToastContainer
        position={`${isMobileScreen() ? "bottom-center" : "top-right"}`}
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Toast;
