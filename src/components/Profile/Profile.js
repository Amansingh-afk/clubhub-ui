import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../Layout/Layout";

const courses = [
  { name: "BCA", semesters: [1, 2, 3, 4, 5, 6] },
  { name: "MBA", semesters: [1, 2, 3, 4] },
];

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [username, setUsername] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");

  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setCourse(selectedCourse);
    setSemester("");
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#v-tabs-profile") {
      setActiveTab(1);
    } else if (hash === "#v-tabs-messages") {
      setActiveTab(2);
    } else {
      setActiveTab(0);
    }
  }, [location]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Layout>
      <div className="row w-100">
        <div className="col-3">
          {/* Tab navs */}
          <div
            className="nav flex-column nav-tabs text-center"
            id="v-tabs-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className={`nav-link ${
                activeTab === 0 ? "active" : ""
              } text-dark`}
              id="v-tabs-home-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-home"
              role="tab"
              aria-controls="v-tabs-home"
              aria-selected={activeTab === 0}
              onClick={() => handleTabClick(0)}
            >
              Profile Settings
            </a>
            <a
              className={`nav-link ${
                activeTab === 1 ? "active" : ""
              } text-dark`}
              id="v-tabs-profile-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-profile"
              role="tab"
              aria-controls="v-tabs-profile"
              aria-selected={activeTab === 1}
              onClick={() => handleTabClick(1)}
            >
              Password
            </a>
            <a
              className={`nav-link ${
                activeTab === 2 ? "active" : ""
              } text-dark`}
              id="v-tabs-messages-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-messages"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected={activeTab === 2}
              onClick={() => handleTabClick(2)}
            >
              Delete Account
            </a>
          </div>
          {/* Tab navs */}
        </div>

        <div className="col-9">
          {/* Tab content */}
          <div className="tab-content" id="v-tabs-tabContent">
            <div
              className={`tab-pane fade ${
                activeTab === 0 ? "show active" : ""
              }`}
              id="v-tabs-home"
              role="tabpanel"
              aria-labelledby="v-tabs-home-tab"
            >
              <div className="row">
                <div className="col mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="e-profile">
                        <div className="row">
                          <div className="col-12 col-sm-auto mb-3">
                            <div className="mx-auto" style={{ width: "140px" }}>
                              <div
                                className="d-flex justify-content-center align-items-center rounded"
                                style={{
                                  height: "140px",
                                  backgroundColor: "rgb(233, 236, 239)",
                                }}
                              >
                                <span
                                  style={{
                                    color: "rgb(166, 168, 170)",
                                    font: "bold 8pt Arial",
                                  }}
                                >
                                  140x140
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                              <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                Aman Singh
                              </h4>
                              <p className="mb-0">@aman.s</p>
                              <div className="text-muted">
                                <small>bc/23/009</small>
                              </div>
                              <div className="mt-2">
                                <button
                                  className="btn btn-outline-dark"
                                  type="button"
                                >
                                  <i className="bx bx-camera m-1"></i>
                                  <span>Change Photo</span>
                                </button>
                              </div>
                            </div>
                            <div className="text-center text-sm-right">
                              <span className="badge badge-secondary">
                                administrator
                              </span>
                              <div className="text-muted">
                                <small>Joined 09 Feb 2023</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a href="" className="active nav-link">
                              Settings
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content pt-3">
                          <div className="tab-pane active">
                            <form>
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label
                                    htmlFor="fullName"
                                    className="form-label"
                                  >
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
                                  <label
                                    htmlFor="username"
                                    className="form-label"
                                  >
                                    Username:
                                  </label>
                                  <input
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    value={username}
                                    onChange={(event) =>
                                      setUsername(event.target.value)
                                    }
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
                                    onChange={(event) =>
                                      setEmail(event.target.value)
                                    }
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="phoneNo"
                                    className="form-label"
                                  >
                                    Phone No:
                                  </label>
                                  <input
                                    type="tel"
                                    id="phoneNo"
                                    className="form-control"
                                    value={phoneNo}
                                    onChange={(event) =>
                                      setPhoneNo(event.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label
                                    htmlFor="course"
                                    className="form-label"
                                  >
                                    Course:
                                  </label>
                                  <select
                                    id="course"
                                    className="form-select"
                                    value={course}
                                    onChange={handleCourseChange}
                                  >
                                    <option value="">--Select Course--</option>
                                    {courses.map((course) => (
                                      <option
                                        key={course.name}
                                        value={course.name}
                                      >
                                        {course.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                {course && (
                                  <div className="col-md-6">
                                    <label
                                      htmlFor="semester"
                                      className="form-label"
                                    >
                                      Semester:
                                    </label>
                                    <select
                                      id="semester"
                                      className="form-select"
                                      value={semester}
                                      onChange={(event) =>
                                        setSemester(event.target.value)
                                      }
                                    >
                                      <option value="">
                                        --Select Semester--
                                      </option>
                                      {courses
                                        .find((c) => c.name === course)
                                        .semesters.map((s) => (
                                          <option key={s} value={s}>
                                            {s}
                                          </option>
                                        ))}
                                    </select>
                                  </div>
                                )}
                              </div>
                              <button type="submit" className="btn btn-primary">
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
                        assistants.
                      </p>
                      <button type="button" className="btn btn-outline-dark">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === 1 ? "show active" : ""
              }`}
              id="v-tabs-profile"
              role="tabpanel"
              aria-labelledby="v-tabs-profile-tab"
            >
              Password content
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === 2 ? "show active" : ""
              }`}
              id="v-tabs-messages"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              Delete Account
            </div>
          </div>
          {/* Tab content */}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
