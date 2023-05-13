import React, { useState } from "react";
import { toast } from 'react-toastify';

import Layout from "../Layout/Layout";
import { createClub } from "../../utils/api";

const ClubForm = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [clubName, setClubName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [description, setDescription] = useState("");

  const handleBannerImageChange = (event) => {
    const file = event.target.files[0];
    setBannerImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClub = {
      name: clubName,
      adminUsername: adminName,
      description,
      banner: bannerImage,
    };
    try {
      const { data } = await createClub(newClub);
    } catch (err) {
      toast.error(err.response.data.error);
    }
    // Reset form fields
    setBannerImage(null);
    setClubName("");
    setAdminName("");
    setDescription("");
  };

  return (
    <Layout>
      <div className="container">
        <h1 className="text-light bg-dark px-3 rounded">Create Club</h1>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-sm-auto mb-3">
              <div className="mx-auto" style={{ width: "500px" }}>
                <div
                  className="d-flex justify-content-center border border-dark align-items-center rounded"
                  style={{
                    height: "240px",
                    backgroundColor: "rgb(233, 236, 239)",
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!bannerImage && (
                    <span
                      style={{
                        color: "rgb(166, 168, 170)",
                        font: "bold 8pt poppins",
                      }}
                    >
                      choose club banner
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="mt-2">
                <label
                  htmlFor="bannerUpload"
                  className="btn btn-outline-dark shadow"
                >
                  <i className="bx bx-camera m-1"></i>
                  <span>Change Photo</span>
                  <input
                    type="file"
                    id="bannerUpload"
                    accept="image/*"
                    onChange={handleBannerImageChange}
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    
                  />
                </label>
              </div>
              <div className="mt-3">
                <label htmlFor="clubName" className="form-label">
                  Club Name
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  placeholder="Enter Club Name"
                  id="clubName"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <label htmlFor="adminName" className="form-label">
                  Admin Username
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  placeholder="Please, Enter Admin's username"
                  id="adminName"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control shadow"
              id="description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary shadow">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ClubForm;
