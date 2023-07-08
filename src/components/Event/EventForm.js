import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  createEvent,
  getAdminClub,
  getEventData,
  updateEventDetails,
} from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const EventForm = ({ isEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [minDate, setMinDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    description: "",
  });
  const [adminClub, setAdminClub] = useState(null);
  const [eventType, setEventType] = useState("individual");

  useEffect(() => {
    const fetchClubData = async () => {
      const { club } = await getAdminClub();
      setAdminClub({ ...club, loading: false });
    };

    const fetchEventData = async () => {
      try {
        const { event } = await getEventData(id);
        const scheduledDate = new Date(event.scheduled_date);
        const formattedDate = `${scheduledDate.getFullYear()}-${(
          scheduledDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${scheduledDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;
        setEventData({
          eventName: event.name,
          eventDate: formattedDate,
          description: event.description,
        });
        setEventType(event.event_type);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    };

    fetchClubData();
    if (isEdit) {
      fetchEventData();
    }
  }, [isEdit]);

  const handleInputChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = {
      name: eventName,
      club_id: adminClub._id,
      description,
      scheduled_date: eventDate,
      event_type: eventType,
    };
    try {
      if (isEdit) {
        await updateEventDetails(id, event);
        toast.success("Event details updated!!");
        navigate(`/event/${id}`);
      } else {
        await createEvent(event);
        toast.success("Event created successfully !!");
        navigate(`/event`);
      }
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const { eventName, eventDate, description } = eventData;

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="bg-dark text-white shadow rounded py-2">
            {isEdit ? "Edit Event" : "Create Event"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <div className="row">
                <div className="col-sm-12 col-md-2">
                  <label htmlFor="eventName" className="form-label">
                    Event Name :
                  </label>
                </div>
                <div className="col-sm-12 col-md-10">
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={eventName}
                    onChange={handleInputChange}
                    className="form-control shadow"
                    placeholder="Please Enter Event name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="my-3">
              <div className="row">
                <div className="col-sm-12 col-md-2">
                  <label htmlFor="clubName" className="form-label">
                    Club Name :
                  </label>
                </div>
                <div className="col-sm-12 col-md-10">
                  <input
                    type="text"
                    id="clubName"
                    name="clubName"
                    value={adminClub?.name}
                    className="form-control shadow"
                    placeholder="Please Enter Club name"
                    readOnly
                    required
                  />
                </div>
              </div>
            </div>
            {!isEdit && (
              <div className="my-3">
                <div className="row">
                  <div className="col-sm-12 col-md-2">
                    <label htmlFor="eventDate" className="form-label">
                      Event Type :
                    </label>
                  </div>
                  <div className="form-check form-check-inline col-sm-6 col-md-3 ms-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="eventTypeOptions"
                      id="individualEvent"
                      value="individual"
                      checked={eventType === "individual"}
                      onChange={(e) => setEventType(e.target.value)}
                    />
                    <label className="form-check-label" for="individualEvent">
                      Individual Event
                    </label>
                  </div>
                  <div className="form-check form-check-inline col-sm-6 col-md-3 ms-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="eventTypeOptions"
                      id="teamEvent"
                      value="team"
                      checked={eventType === "team"}
                      onChange={(e) => setEventType(e.target.value)}
                    />
                    <label className="form-check-label" for="teamEvent">
                      Team Event
                    </label>
                  </div>
                </div>
              </div>
            )}
            <div className="my-3">
              <div className="row">
                <div className="col-sm-12 col-md-2">
                  <label htmlFor="eventDate" className="form-label">
                    scheduled date :
                  </label>
                </div>
                <div className="col-sm-12 col-md-4">
                  <input
                    type="date"
                    min={minDate}
                    name="eventDate"
                    value={eventDate}
                    onChange={handleInputChange}
                    className="form-control shadow"
                  />
                </div>
              </div>
            </div>
            <div className="my-3">
              <div className="row">
                <div className="col-sm-12 col-md-2">
                  <label htmlFor="desc" className="form-label">
                    Event description :
                  </label>
                </div>
                <div className="col-sm-12 col-md-10">
                  <textarea
                    id="desc"
                    rows={5}
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    className="form-control shadow "
                    placeholder="Event description.."
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary shadow float-end px-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventForm;
