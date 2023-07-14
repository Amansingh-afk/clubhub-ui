import React from "react";
import { toast } from "react-toastify";
import { removeUserFromClub } from "../../utils/api";

const ClubMembers = ({ clubId, isAdmin, members, setRefreshKey }) => {

  const removeMember = async(userId) => {
    const userInfo = {
      userId: userId,
      clubId: clubId,
    };
    try {
      await removeUserFromClub(userInfo);
      toast.warning("Member removed.");
      setRefreshKey((prev)=> prev + 1);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>Profile Photo</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Semester</th>
            {isAdmin && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
        {!members.length && (
            <span className="text-nowrap px-4">No members yet.</span>
          )}
          {members.map((row) => (
            <tr key={row._id} className="shadow-sm">
              <td>
                <div>
                  <img
                    src={row.avatar.url}
                    alt="Profile"
                    width={45}
                    height={45}
                    className="rounded-circle shadow"
                  />
                </div>
              </td>
              <td>{row.name}</td>
              <td>{row.roll_no.toUpperCase()}</td>
              <td>{row.course}</td>
              <td>{row.semester}</td>
              {isAdmin && (
                <td>
                  <button className="btn btn-danger" onClick={()=> removeMember(row._id)}>
                    <i className="bx bx-trash"></i>
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubMembers;
