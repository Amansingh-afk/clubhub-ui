import React, { useState } from "react";
import { createTeam } from "../../utils/api";
import { toast } from "react-toastify";

import Modal from "../Common/Modal";

const TeamForm = ({ isOpen, onClose, eventId, clubId, setRefreshKey }) => {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const team = {
      name: teamName,
      description,
      event_id: eventId,
      clubId,
    };
    try {
      await createTeam(team);
      setRefreshKey((prev) => prev + 1);
      toast.success("Team created ..");
    } catch (err) {
      toast.warning(err.response.data.error);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card border-0">
              <div className="card-body">
                <h3 className="text-center mb-4">Create Team</h3>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control shadow"
                      id="teamName"
                      placeholder="Enter Team name"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      required
                    />
                    <label htmlFor="teamName" className="form-label-sm">
                      Team Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control shadow"
                      id="desc"
                      placeholder="Description"
                      value={description}
                      onChange={(e) =>
                        setDescription(e.target.value.slice(0, 30))
                      }
                      required
                    />
                    <label htmlFor="desc" className="form-label-sm">
                      Description
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block shadow w-100"
                    onClick={handleSubmit}
                  >
                    Create Team
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TeamForm;
