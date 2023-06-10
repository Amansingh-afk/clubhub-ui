import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import {
  getClubData,
  subscribeMembership,
  unSubscribeMembership,
} from "../../utils/api";

import useAuth from "../../utils/UseAuth";
import ClubMembers from "./ClubMembers";
import Spinner from "../Common/Spinner";

const ClubDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);
  const [club, setClub] = useState(null);
  const [clubMembers, setClubMembers] = useState(null);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const res = await getClubData(id);
        setClub(res.club);
        setClubMembers(res.members);
        setIsMember(res.isMember);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    };

    fetchClubData();
  }, [id, refreshKey]);

  if (club === null) {
    return <Spinner />;
  }

  const becomeMember = async () => {
    try {
      await subscribeMembership({ userId: user._id, clubId: id });
      setIsMember(true);
      toast.success("Subscribed !!");
      setRefreshKey((prevKey) => prevKey + 1); // Trigger useEffect by updating the refreshKey state
    } catch (err) {
      toast.warning(err.response.data.error);
    }
  };

  const leaveClub = async () => {
    try {
      const clubId = id;
      setIsMember(false);
      await unSubscribeMembership(clubId);
      toast.warning("UnSubsribed !!");
      setRefreshKey((prevKey) => prevKey + 1); // Trigger useEffect by updating the refreshKey state
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={club?.banner.url}
            alt=""
            className="img-fluid shadow mb-3 rounded"
          />
          {user.role === "student" &&
            (isMember ? (
              <button className="btn btn-danger shadow m-1" onClick={leaveClub}>
                Leave this Club
              </button>
            ) : (
              <button
                className="btn btn-dark shadow m-1"
                onClick={becomeMember}
              >
                <i className="bx bx-plus"></i> Join this Club
              </button>
            ))}
          {user?._id === club.admin_id && (
            <Link
              to={`/club/update/${id}`}
              className="btn btn-primary shadow m-1"
            >
              <i className="bx bx-edit-alt"></i> Edit club details
            </Link>
          )}
        </div>
        <div className="col-sm-6 my-2">
          <div>
            <div className="float-end"></div>
            <strong className="text-dark fs-1 text-decoration-underline">
              {club.name}
            </strong>
            <br />
            <small>created_on: </small>
            <br />
            <span>
              <small>Club Admin's name : </small>
              <span className="fs-5">{club.admin.name}</span>
            </span>{" "}
            <br />
            <span>
              <small>Club Admin's username : </small>
              <span className="fs-5">{club.admin.username}</span>
            </span>
          </div>
          <hr />
          <p>{club.description}</p>

          <hr />
        </div>
      </div>
      <div className="my-5">
        <ClubMembers
          clubId={id}
          isAdmin={user?._id === club.admin_id}
          members={clubMembers}
        />
      </div>
    </div>
  );
};

export default ClubDetail;
