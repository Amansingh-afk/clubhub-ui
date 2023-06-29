import React, { useState } from "react";
import Modal from "./Modal";

const ImageSelector = ({ isOpen, onClose, onSelect }) => {
  const clubBanners = [
    {
      public_id: "image a",
      url: "https://i.pinimg.com/originals/de/50/2a/de502a25972d06b9ed6ceed15a2e5e09.gif",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/originals/17/a0/9c/17a09c9bcb554bcbbad6e84ab4687792.gif",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/originals/77/ca/a3/77caa32884d735d439ade45ba37feaf2.gif",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/originals/27/b7/bb/27b7bb9d448b224f682c88ad70f22c56.gif",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/originals/15/2a/21/152a217900d0442c256a714030704977.gif",
    },
  ];

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
                alt="Image 2"
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
