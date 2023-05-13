import { Link } from "react-router-dom";

const ClubCard = ({ club }) => {
  const link = `/club/${club.id}`;
  return (
    <div class="card shadow border border-0 border-rounded p-2">
      <div class="row g-0">
        <div class="col-md-6">
          <img
            src={club.link}
            class="card-img shadow"
            alt="Image"
            height={180}
          />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5
              class="card-title"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {club.title}
            </h5>
            <small className="text-muted">Club admin name</small>
            <p class="card-text">{club.description}</p>
            <Link className="btn btn-rounded btn-outline-dark" to={link}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
