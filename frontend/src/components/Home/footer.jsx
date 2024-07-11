import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Footer = () => {
  // async function data () {
  //   var data= await axios.get('http://localhost:3001/clients')
  //   .then((res)=>console.log(res))
  // }
  //     // console.log(data);

  // data()

  return (
    <div>
      <div className=" mt-5">
        <footer className="text-center text-lg-start ">
          <div className="container ">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12  mb-md-0">
                <h5 className="text-uppercase mb-4">
                  <img
                    src=".\img\heartcare.jpg"
                    style={{ height: "30px" }}
                    alt="logo hospital"
                  ></img>
                  <span className="ms-1" style={{ color: "#4200FF" }}>
                    HealthCare
                  </span>
                </h5>

                <p>
                  Quality healthcare is crucial for individual and societal
                  well-being. From prevention to treatment, healthcare
                  institutions play a vital role. Technological advancements and
                  patient-focused care are key for better outcomes, emphasizing
                  the need for ongoing innovation.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 ">
                <ul className="fa-ul" style={{ margin: "3.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li" style={{ color: "#4200FF" }}>
                      <FontAwesomeIcon icon={faHouse} />
                    </span>
                    <span className="ms-2">Warsaw, 00-967, Poland</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li" style={{ color: "#4200FF" }}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="ms-2">HealthCare@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li" style={{ color: "#4200FF" }}>
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span className="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6  mb-0">
                <h5 className="text-uppercase " style={{ color: "#4200FF" }}>
                  Opening hours
                </h5>

                <table className="table text-center ">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
