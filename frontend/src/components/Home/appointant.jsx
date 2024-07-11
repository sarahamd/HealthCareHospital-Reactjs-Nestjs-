import axios from "axios";
import React, { useEffect, useState } from "react";

const Appointant = ({ userData }) => {
  const { id } = userData;
  const [booking, setbooking] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    console.log(id);
    await axios.get(`http://localhost:3001/clients/${id}`).then((res) => {
      console.log(res.data[0]);
      setbooking(res.data[0].booking);
    });
  };
  function handledelete(id) {
    console.log(id);
  }
  return (
    <div>
      <div
        className="w-100 border-bottom m-2"
        style={{ backgroundColor: "#cccccc13" }}
      >
        <h4 className="p-3 mb-0 " style={{ color: "#4200ff" }}>
          <i
            className="fa-solid fa-calendar-days me-2"
            aria-hidden="true"
            style={{ width: "20px" }}
          ></i>{" "}
          Appointant
        </h4>
      </div>
      <div className="card-body">
        {booking?.map((res, i) => (
          <div className="row" key={res.id}>
            <div className="col-sm-3">
              <h6 className="m-2 text-secondary">{i + 1}</h6>
            </div>
            <div className="col-sm-9 d-flex ">
              {res.doctor} - {res.hours} - {res.date} - {res.price}
              <button
                className="btn btn-danger ms-auto"
                onClick={() => {
                  handledelete(res.id);
                }}
              >
                <i className="fa fa-trash " aria-hidden="true"></i>
              </button>
            </div>

            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointant;
