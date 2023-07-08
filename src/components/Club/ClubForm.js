import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import ImageSelector from "../Common/ImageSelector";
import Spinner from "../Common/Spinner";
import { createClub, getClubData, updateClubDetails } from "../../utils/api";

const ClubForm = ({ isEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [bannerImage, setBannerImage] = useState(null);
  const [clubName, setClubName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectImage = (banner) => {
    setBannerImage(banner);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(bannerImage === null){
      toast.warning("Choose club banner lodu !!");
      return;
    }
    const newClub = {
      name: clubName,
      adminUsername: adminName,
      description,
      banner: bannerImage,
    };
    try {
      if (isEdit) {
        await updateClubDetails(id, newClub);
        toast.success("Club details updated !");
        navigate(`/club/${id}`);
      } else {
        await createClub(newClub);
        toast.success("Club Created succesfully !");
        navigate("/club");
      }
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        const clubDetails = await getClubData(id);
        setClubName(clubDetails.club.name);
        setAdminName(clubDetails.club.admin.username);
        setDescription(clubDetails.club.description);
        setBannerImage(clubDetails.club.banner);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    };

    if (isEdit) {
      fetchClubDetails();
    }
  }, [isEdit]);

  if (isEdit && clubName === "") {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <ImageSelector
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectImage}
      />

      <div className="container">
        <h1 className="text-light bg-dark px-3 rounded">
          {isEdit ? "Edit Club" : "Create Club"}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-sm-auto mb-3">
              <div
                className="mx-auto"
                style={{ maxWidth: "80vw", width: "500px" }}
              >
                <div
                  className=" club_banner d-flex justify-content-center border border-dark align-items-center rounded shadow"
                  style={{
                    height: "35vh",
                    backgroundColor: "rgb(233, 236, 239)",
                    backgroundImage: `url(${bannerImage?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!bannerImage && (
                    <>
                      <span
                        style={{
                          color: "rgb(166, 168, 170)",
                          font: "bold 8pt poppins",
                        }}
                      >
                        choose club banner
                      </span>
                      <img
                        src={bannerImage?.url}
                        alt="banner image"
                        style={{ maxWidth: "100%" }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="mt-2">
                <button
                  onClick={handleOpenModal}
                  type="button"
                  className="btn btn-outline-dark btn-rounded shadow"
                >
                  <i className="bx bx-camera"></i>
                  Choose banner
                </button>
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
                  readOnly={isEdit}
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
            <i className="bx bx-party"></i>{" "}
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ClubForm;
