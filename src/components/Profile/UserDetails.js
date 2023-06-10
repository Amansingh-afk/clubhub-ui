import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserDetails, updateUserDetails } from "../../utils/api";
import Spinner from "../Common/Spinner";
import ProfileImageSelector from "../Common/ProfileImageSelector";

const UserDetails = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [username, setUsername] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { user } = await getUserDetails();
      setUser(user);
      setProfileImage(user.avatar);
      setFullName(user.name);
      setEmail(user.email);
      setUsername(user.username);
      setCourse(user.course);
      setSemester(user.semester);
    };

    fetchUserData();
  }, []);

  if (user === null) {
    return <Spinner />;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectImage = (img) => {
    setProfileImage(img);
  };

  const saveChanges = async (e) => {
    e.preventDefault();
    const userInfo = {
      name: fullName,
      avatar: profileImage,
      email: email,
      phone_no: Number(phoneNo),
    };
    try {
      const { user } = await updateUserDetails(userInfo);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Details updated successfully!");
      window.location.reload();
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <>
      <ProfileImageSelector
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectImage}
      />
      <div className="row">
        <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              <div className="e-profile">
                <div className="row">
                  <div className="col-12 col-sm-auto mb-3">
                    <div
                      className="mx-auto shadow"
                      style={{
                        width: "140px",
                        height: "140px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={profileImage?.url}
                        alt=""
                        style={{ maxHeight: "100%", maxWidth: "100%" }} // Set max dimensions to ensure the image fits within the container
                      />
                    </div>
                  </div>

                  <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                      <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                        {user.name}
                      </h4>
                      <p className="mb-0">{user.username}</p>
                      <div className="text-muted">
                        <small>bc/23/009</small>
                      </div>
                      <div className="mt-2">
                        <button
                          className="btn btn-outline-dark"
                          type="button"
                          onClick={handleOpenModal}
                        >
                          <i className="bx bx-camera m-1"></i>
                          <span>Change Photo</span>
                        </button>
                      </div>
                    </div>
                    <div className="text-center text-sm-right">
                      <span className="badge badge-secondary">{user.role}</span>
                      <div className="text-muted">
                        <small>Joined 09 Feb 2023</small>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="active nav-link">Settings</a>
                  </li>
                </ul>
                <div className="tab-content pt-3">
                  <div className="tab-pane active">
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="fullName" className="form-label">
                            Full Name:
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            className="form-control"
                            value={fullName}
                            onChange={(event) =>
                              setFullName(event.target.value)
                            }
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="username" className="form-label">
                            Username:
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">
                            Email:
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phoneNo" className="form-label">
                            Phone No:
                          </label>
                          <input
                            type="tel"
                            id="phoneNo"
                            className="form-control"
                            value={phoneNo}
                            onChange={(event) => setPhoneNo(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="course" className="form-label">
                            Course:
                          </label>
                          <input
                            type="text"
                            id="course"
                            className="form-control"
                            value={course}
                            readOnly
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="semester" className="form-label">
                            Semester:
                          </label>
                          <input
                            type="text"
                            id="semester"
                            className="form-control"
                            value={semester}
                            readOnly
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={saveChanges}
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-3">
          <div className="card mb-3">
            <div className="card-body">
              <div className="px-xl-3">
                <button className="btn btn-block btn-outline-dark">
                  <i className="bx bx-sign-out"></i>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title font-weight-bold">Support</h6>
              <p className="card-text">
                Get fast, free help from our friendly <b>BCA VI </b>
                students.
              </p>
              <button type="button" className="btn btn-outline-dark">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
