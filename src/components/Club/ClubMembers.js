import React from "react";

const ClubMembers = () => {
  const data = [
    {
      id: 1,
      profilePhoto:
        "https://i.pinimg.com/236x/ef/20/6b/ef206b18cce54867dc03a5a8a5d81d95.jpg",
      name: "John Doe",
      rollNo: "123456",
      course: "Computer Science",
      semester: "4th",
    },
    {
      id: 2,
      profilePhoto:
        "https://i.pinimg.com/236x/3f/7a/90/3f7a909e37086a5eef64b07768fffc2d.jpg",
      name: "Jane Smith",
      rollNo: "654321",
      course: "Electrical Engineering",
      semester: "6th",
    },
    {
      id: 3,
      profilePhoto:
        "https://i.pinimg.com/236x/b0/df/ce/b0dfced73ad3c5b553eae610baf7cd1d.jpg",
      name: "Jane Smith",
      rollNo: "654321",
      course: "Electrical Engineering",
      semester: "6th",
    },
    {
      id: 4,
      profilePhoto:
        "https://i.pinimg.com/236x/8b/51/10/8b51103292cdddca122de6c67c185640.jpg",
      name: "Jane Smith",
      rollNo: "654321",
      course: "Electrical Engineering",
      semester: "6th",
    },
    // Add more data objects as needed
  ];

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="shadow-sm">
              <td>
                <div>
                  <img
                    src={row.profilePhoto}
                    alt="Profile"
                    width={45}
                    height={45}
                    className="rounded-circle shadow"
                  />
                </div>
              </td>
              <td>{row.name}</td>
              <td>{row.rollNo}</td>
              <td>{row.course}</td>
              <td>{row.semester}</td>
              <td>
                <button className="btn btn-danger">
                  <i className="bx bx-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubMembers;
