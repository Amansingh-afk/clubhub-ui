import React, { useState } from "react";
import Modal from "./Modal";

import { clubBanners } from "../../config";

const ImageSelector = ({ isOpen, onClose, onSelect }) => {
 

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
          {clubBanners.map((banner, index) => (
            <div className="col-lg-6 my-3" key={index}>
              <img
                src={banner.url}
                alt={banner.public_id}
                style={{maxHeight: "245px", minWidth: "100%"}}
                className={`img-fluid shadow rounded ${
                  selectedImage === banner.url ? "selected" : ""
                }`}
                onClick={() => handleImageClick(banner)}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ImageSelector;
