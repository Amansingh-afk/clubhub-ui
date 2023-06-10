import React, { useState } from "react";

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

const ProfileImageSelector = ({ isOpen, onClose, onSelect }) => {
  const imgs = [
    {
      public_id: "image a",
      url: "https://i.pinimg.com/564x/8d/d3/b0/8dd3b09d3961cf28cb86f6a141b26037.jpg",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/564x/40/83/25/408325bb57e1a479b656f75aba29a96f.jpg",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/564x/f6/c4/1d/f6c41d52e2ffaa1148cd0b8d08f17ed1.jpg",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/originals/94/e4/cb/94e4cb5ae194975f6dc84d1495c3abcd.gif",
    },
    {
      public_id: "image a",
      url: "https://i.pinimg.com/564x/be/54/04/be5404703771cd182aeeb97768796cf0.jpg",
    },
    {
      public_id: "profile img",
      url: "https://i.pinimg.com/originals/ed/65/f9/ed65f968a0870ea70dd3327898213432.gif",
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
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="container py-3">
        <div className="row">
          {imgs.map((img, index) => (
            <div className="col-lg-3 my-3" key={index}>
              <img
                src={img.url}
                alt="Image 2"
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
