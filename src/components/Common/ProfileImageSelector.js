import React, { useState } from "react";
import Modal from "./Modal";

import { profileImages } from "../../config";

const ProfileImageSelector = ({ isOpen, onClose, onSelect }) => {
  

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    if (selectedImage === image.url) {
      setSelectedImage(null);
      onSelect(null);
    } else {
      setSelectedImage(image.url);
      onSelect(image);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="container py-3">
        <div className="row">
          {profileImages.map((img, index) => (
            <div className="col-lg-3 my-3" key={index}>
              <img
                src={img.url}
                alt={img.public_id}
                className={`img-fluid shadow rounded ${
                  selectedImage === img.url ? "selected" : ""
                }`}
                onClick={() => handleImageClick(img)}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ProfileImageSelector;
