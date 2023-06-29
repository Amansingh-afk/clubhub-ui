import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className="modal">
        <div className="modal-content">
          <button
            type="button"
            class="modal-close btn-close me-4"
            aria-label="Close"
            onClick={onClose}
            ></button>
          {children}
        </div>
      </div>
    );
};

export default Modal