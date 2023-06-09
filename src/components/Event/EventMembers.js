import { toast } from "react-toastify";
import { removeUserFromEvent } from "../../utils/api";

const EventMembers = ({ eventId, isAdmin, participants, isTeamEvent, setRefreshKey }) => {
  const removeParticpant = async (userId) => {
    const userInfo = {
      userId: userId,
      eventId: eventId,
    };
    try {
      await removeUserFromEvent(userInfo);
      setRefreshKey((prev) => prev + 1);
      toast.warning("Participant removed.");
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>Profile Photo</th>
            <th>Name</th>
            <th>Roll no.</th>
            <th>Course</th>
            <th>Semester</th>
            {isTeamEvent && <th>Team</th>}
            {isAdmin && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {!participants.length && (
            <span className="text-nowrap px-4">No participants yet.</span>
          )}
          {participants.map((row) => (
            <tr key={row._id} className="shadow-sm ">
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
              {isTeamEvent && <td>{row.team_name}</td> }
              {isAdmin && (
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeParticpant(row._id)}
                  >
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

export default EventMembers;
