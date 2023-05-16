import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { getClubData, subscribeMembership } from "../../utils/api";

import Layout from "../Layout/Layout";
import useAuth from "../../utils/UseAuth";
import ClubMembers from "./ClubMembers";
import Spinner from "../Common/Spinner";

const ClubDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const res = await getClubData(id);
        setClubData(res);
        console.log(res)
      } catch (err) {
        toast.error(err);
      }
    };

    fetchClubData();
  }, [id]);

  if (clubData === null) {
    return <Spinner />;
  }

  const becomeMember = async () => {
    try {
      await subscribeMembership({ userId: user._id, clubId: id });
      toast.success("Subscribed !!");
    } catch (err) {
      toast.warning(err.response.data.error);
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={clubData?.club.banner.url}
              alt=""
              className="img-fluid shadow mb-3 rounded"
            />
            <button className="btn btn-dark shadow mx-1" onClick={becomeMember}>
              <i className="bx bx-plus"></i> Become a member
            </button>
            {user?._id === clubData?.club.admin_id && (
              <Link
                to={`/club/update/${id}`}
                className="btn btn-primary shadow mx-1"
              >
                <i className="bx bx-edit-alt"></i> Edit club details
              </Link>
            )}
          </div>
          <div className="col-sm-6">
            <div>
              <div className="float-end"></div>
              <strong className="text-dark fs-1 text-decoration-underline">
                {clubData.club.name}
              </strong>
              <br />
              <small>created_on: </small>
              <br />
              <span>
                <small>Club Admin's name : </small>
                <span className="fs-5">{clubData?.club.admin.name}</span>
              </span>{" "}
              <br />
              <span>
                <small>Club Admin's username : </small>
                <span className="fs-5">{clubData?.club.admin.username}</span>
              </span>
            </div>
            <hr />
            <p>{clubData?.club.description}</p>

            <hr />
          </div>
        </div>
        <div className="my-5">
          <ClubMembers />
        </div>
      </div>
    </Layout>
  );
};

export default ClubDetail;
