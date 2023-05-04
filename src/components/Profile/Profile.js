import React from "react";
import Layout from "../Layout/Layout";

const Profile = () => {
  return (
    <Layout>
      <div class="container">
        <div class="row flex-lg-nowrap">
          <div class="col-12 col-lg-auto mb-3" style={{ width: "200px" }}>
            <div class="card p-3">
              <div class="e-navlist e-navlist--active-bg">
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link px-2 active text-dark" href="#">
                      <i class="bx bx-bar-chart mr-1"></i>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link px-2 text-dark"
                      href="https://www.bootdey.com/snippets/view/bs4-crud-users"
                      target="__blank"
                    >
                      <i class="bx bx-bell mr-1"></i>
                      <span>Password</span>
                    </a>
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
                              <small>Dragon Slayers..</small>
                            </div>
                            <div class="mt-2">
                              <button class="btn btn-outline-dark" type="button">
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
                          <form class="form" novalidate="">
                            <div class="row">
                              <div class="col">
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Full Name</label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Aman Singh"
                                        value="Aman Singh"
                                      />
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Username</label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        name="username"
                                        placeholder="aman.s"
                                        value="aman.s"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Email</label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="user@example.com"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col mb-3">
                                    <div class="form-group">
                                      <label>About</label>
                                      <textarea
                                        class="form-control"
                                        rows="5"
                                        placeholder="My Bio"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              
                              <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div class="mb-2">
                                  <b>Keeping in Touch</b>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <label>Email Notifications</label>
                                    <div class="custom-controls-stacked px-2">
                                      <div class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          class="custom-control-input"
                                          id="notifications-blog"
                                          checked=""
                                        />
                                        <label
                                          class="custom-control-label"
                                          for="notifications-blog"
                                        >
                                          Blog posts
                                        </label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          class="custom-control-input"
                                          id="notifications-news"
                                          checked=""
                                        />
                                        <label
                                          class="custom-control-label"
                                          for="notifications-news"
                                        >
                                          Newsletter
                                        </label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          class="custom-control-input"
                                          id="notifications-offers"
                                          checked=""
                                        />
                                        <label
                                          class="custom-control-label"
                                          for="notifications-offers"
                                        >
                                          Personal Offers
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col d-flex justify-content-end">
                                <button class="btn btn-outline-dark" type="submit">
                                  Save Changes
                                </button>
                              </div>
                            </div>
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
