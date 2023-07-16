import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import {
  deleteClub,
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
      toast.success("Joined the club !!");
      setRefreshKey((prevKey) => prevKey + 1);
    } catch (err) {
      toast.warning(err.response.data.message);
    }
  };

  const leaveClub = async () => {
    try {
      const clubId = id;
      setIsMember(false);
      await unSubscribeMembership(clubId);
      toast.warning("Left the club !!");
      setRefreshKey((prevKey) => prevKey + 1);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleDeleteClub = async () => {
    try {
      // await deleteClub(id);
      toast.info("This feature is in progress, SORRY!!");
    } catch (err) {
      toast.error(err.response.data.message);
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
          {/* super-admin action buttons */}
          {user.role === "super_admin" && (
            <>
              <Link
                to={`/club/update/${id}`}
                className="btn btn-primary shadow m-1"
              >
                <i className="bx bx-edit-alt"></i> Edit club details
              </Link>
              <button className="btn btn-danger" onClick={handleDeleteClub}>
                <i className="bx bx-trash"></i> Delete Club
              </button>
            </>
          )}

          {/* student action buttons */}
          {user.role === "student" &&
            (isMember ? (
              <button className="btn btn-danger shadow m-1" onClick={leaveClub}>
                <i className="bx bx-log-out"></i> Leave Club
              </button>
            ) : (
              <button
                className="btn btn-dark shadow m-1"
                onClick={becomeMember}
              >
                <i className="bx bx-rocket"></i> Join Club
              </button>
            ))}

          {/* Admin action buttons  */}
          {user?._id === club.admin_id && (
            <div>
              <Link
                to={`/club/update/${id}`}
                className="btn btn-primary shadow m-1"
              >
                <i className="bx bx-edit-alt"></i> Edit club details
              </Link>
              <Link to="/event/new" className="btn btn-primary shadow">
                <i className="bx bx-customize"></i> Create Event
              </Link>
            </div>
          )}
        </div>

        {/* club details  */}
        <div className="col-sm-6 my-2">
          <div>
            <div className="float-end"></div>
            <strong className="text-dark fs-1 text-decoration-underline text-capitalize">
              {club.name}
            </strong>
            <br />
            <span>
              <small>Club Admin's name : </small>
              <span className="fs-5 text-capitalize">{club.admin.name}</span>
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
          setRefreshKey={setRefreshKey}
        />
      </div>
    </div>
  );
};

export default ClubDetail;
