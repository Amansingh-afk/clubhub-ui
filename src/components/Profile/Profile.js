import React from "react";
import Layout from "../Layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setCourse(selectedCourse);
    setSemester("");
  };
  return (
    <Layout>
      <div class="container">
        <div class="row flex-lg-nowrap">
          <div class="col-12 col-lg-auto mb-3" style={{ width: "200px" }}>
            <div class="card p-3">
              <div class="e-navlist e-navlist--active-bg">
                <ul class="nav">
                  <li class="nav-item">
                    <span class="nav-link px-2 active text-dark">
                      <i class="bx bx-bar-chart mr-1"></i>
                      <span>Settings</span>
                    </span>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link px-2 text-dark" to="/change-password">
                      <i class="bx bx-bell mr-1"></i>
                      <span>Password</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">
              <div class="col mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="e-profile">
                      <div class="row">
                        <div class="col-12 col-sm-auto mb-3">
                          <div class="mx-auto" style={{ width: "140px" }}>
                            <div
                              class="d-flex justify-content-center align-items-center rounded"
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
                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div class="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
                              Aman Singh
                            </h4>
                            <p class="mb-0">@aman.s</p>
                            <div class="text-muted">
                              <small>bc/23/009</small>
                            </div>
                            <div class="mt-2">
                              <button
                                class="btn btn-outline-dark"
                                type="button"
                              >
                                <i class="bx bx-camera m-1"></i>
                                <span>Change Photo</span>
                              </button>
                            </div>
                          </div>
                          <div class="text-center text-sm-right">
                            <span class="badge badge-secondary">
                              administrator
                            </span>
                            <div class="text-muted">
                              <small>Joined 09 Feb 2023</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-tabs">
                        <li class="nav-item">
                          <a href="" class="active nav-link">
                            Settings
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content pt-3">
                        <div class="tab-pane active">
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
                                <label htmlFor="phoneNo" className="form-label">
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
                                <label htmlFor="course" className="form-label">
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

              <div class="col-12 col-md-3 mb-3">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="px-xl-3">
                      <button class="btn btn-block btn-outline-dark">
                        <i class="bx bx-sign-out"></i>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title font-weight-bold">Support</h6>
                    <p class="card-text">
                      Get fast, free help from our friendly assistants.
                    </p>
                    <button type="button" class="btn btn-outline-dark">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
