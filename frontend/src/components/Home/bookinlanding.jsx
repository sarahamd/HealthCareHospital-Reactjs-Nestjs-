import React, { useCallback, useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Bookinlanding = () => {
  const [doctorsname, setdoctorsname] = useState();
  const [drname, setdrname] = useState();
  const [flag, setflag] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);
  const nav = useNavigate();

  const loginform = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      date: "",
      hours: "",
      doctor: "",
      password: "",
      price: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      lastname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.string().required("Required"),
      hours: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      doctor: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(/^01[0125][0-9]{8}$/, "Invalid number")
        .required("Required"),
    }),

    onSubmit: (values) => {
      postDataForm(values);
    },
  });
  const fetchDoctor = async () => {
    await axios
      .get("http://localhost:3001/doctors")
      .then((res) => {
        setdoctorsname(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  async function postDataForm(val) {
    let { email, password } = val;

    await axios
      .post("http://localhost:3001/clients/login", {
        email,
        password,
      })
      .then((res) => {
        var { data } = res;
        var { message, JWT } = data;
        if (message === "Logged-In Successfully") {
          const cookies = new Cookies(null, { path: "/" });
          const expirationDate = new Date();
          expirationDate.setMonth(expirationDate.getMonth() + 10);
          cookies.set("x", JWT, { expires: expirationDate });
          if (JWT) {
            var { user } = jwtDecode(JWT);
            var { id } = user;
            patchdata(id, val, user);
          }

         
        } else if (message === "Invalid Email Or Password !") {
          setflag(true);
        }
      });
  }
  let count = Math.floor(Math.random() * 31); // Initializing count with a random value between 0 and 2
  async function patchdata(userid, val, user) {
    var { price, hours, doctor, date } = val;

    let booking = {
      price,
      hours,
      doctor,
      date,
      id: count,
    };
    await axios
      .patch(
        `http://localhost:3001/clients/${userid}`,

        { booking: [...user.booking, booking] }
      )
      .then((res) => {
        var { data } = res;
        var { Message } = data;
        if (Message === "updated successfully ") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Appointment Successfully Booked!",
            showConfirmButton: false,
            timer: 1500,
          });

          nav("/Profileuser");
        }
      });
  }
  useEffect(() => {
    fetchDoctor();
  }, []);

  return (
    <MDBContainer>
      <form onSubmit={loginform.handleSubmit}>
        <MDBRow className="justify-content-center align-items-center m-5">
          <MDBCard>
            <MDBCardBody className="px-4">
              <MDBRow>
                <MDBCol md="9">
                  <select
                    name="doctor"
                    className=" m-3 form-select"
                    aria-label="Default select example"
                    onChange={(event) => {
                      loginform.handleChange(event);
                      setdrname(event.target.value);
                    }}
                    onBlur={loginform.handleBlur}
                    value={loginform.values.doctor}
                  >
                    <option>Select Your Doctor</option>
                    {doctorsname?.map((nm) => (
                      <option key={nm.id} value={nm.name} name={nm.name}>
                        {" "}
                        {nm.name}
                      </option>
                    ))}
                  </select>
                  {loginform.errors.doctor && loginform.touched.doctor ? (
                    <p className="text-danger m-3">{loginform.errors.doctor}</p>
                  ) : null}
                </MDBCol>

                <MDBCol md="3">
                  <select
                    name="price"
                    className=" m-3 form-select"
                    aria-label="Default select example"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    value={loginform.values.price}
                  >
                    {
                      (loginform.values.price = doctorsname?.filter(
                        (nm) => nm.name === drname
                      )[0]?.price)
                    }
                    {drname ? (
                      <option disabled value={loginform.values.price}>
                        {loginform.values.price}{" "}
                      </option>
                    ) : (
                      "null"
                    )}
                  </select>
                  {loginform.errors.price && loginform.touched.price ? (
                    <p className="text-danger m-3">{loginform.errors.price}</p>
                  ) : null}
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <label>Select available date :</label>

                  <select
                    name="date"
                    className=" m-3 form-select"
                    aria-label="Default select example"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    value={loginform.values.date}
                  >
                    <option></option>

                    {doctorsname
                      ?.filter((nm) => nm.name === drname)[0]
                      ?.available_date?.map((m, i) => (
                        <option key={i} value={m} name={m}>
                          {m}
                        </option>
                      ))}
                  </select>
                  {loginform.errors.date && loginform.touched.date ? (
                    <p className="text-danger m-3">{loginform.errors.date}</p>
                  ) : null}
                </MDBCol>

                <MDBCol md="6">
                  <label>Select available hours :</label>

                  <select
                    name="hours"
                    className=" m-3 form-select"
                    aria-label="Default select example"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    value={loginform.values.hours}
                  >
                    <option></option>
                    {drname
                      ? doctorsname
                          ?.filter((nm) => nm.name === drname)[0]
                          ?.available_hour?.map((m, i) => (
                            <option value={m} key={i} name={m}>
                              {m}
                            </option>
                          ))
                      : "null"}
                  </select>
                  {loginform.errors.hours && loginform.touched.hours ? (
                    <p className="text-danger m-3">{loginform.errors.hours}</p>
                  ) : null}
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="m-3"
                    placeholder="First Name"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    name="firstname"
                    value={loginform.values.firstname}
                    type="text"
                  />
                  {loginform.errors.firstname && loginform.touched.firstname ? (
                    <p className="text-danger m-3">
                      {loginform.errors.firstname}
                    </p>
                  ) : null}
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="m-3"
                    placeholder="Last Name"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    name="lastname"
                    value={loginform.values.lastname}
                    id="form2"
                    type="text"
                  />
                  {loginform.errors.lastname && loginform.touched.lastname ? (
                    <p className="text-danger m-3">
                      {loginform.errors.lastname}
                    </p>
                  ) : null}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBInput
                    wrapperClass="m-3"
                    placeholder="phoneNumber"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    value={loginform.values.phone}
                    id="phone"
                    name="phone"
                    type="tel"
                  />
                  {loginform.errors.phone && loginform.touched.phone ? (
                    <p className="text-danger m-3">{loginform.errors.phone}</p>
                  ) : null}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBInput
                    wrapperClass="m-3"
                    placeholder="Email"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    value={loginform.values.email}
                    id="email"
                    name="email"
                    type="email"
                  />
                  {loginform.errors.email && loginform.touched.email ? (
                    <p className="text-danger m-3">{loginform.errors.email}</p>
                  ) : null}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBInput
                    wrapperClass="m-3"
                    placeholder="password"
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}
                    value={loginform.values.password}
                    id="password"
                    name="password"
                    type={showPassword ? " text" : "password"}
                  />
                  <i
                    className={`fa-solid fa-eye${
                      showPassword ? "" : "-slash"
                    } position-absolute  translate-middle-y `}
                    onClick={togglePasswordVisibility}
                    style={{
                      height: "5.2rem",
                      cursor: "pointer",
                      textAlign: "center",
                      right: "70px",
                    }}
                  ></i>
                  {loginform.errors.password && loginform.touched.password ? (
                    <p className="text-danger m-3">
                      {loginform.errors.password}
                    </p>
                  ) : null}
                </MDBCol>
              </MDBRow>
              {flag ? (
                <p className="text-danger m-3">Invalid Email Or Password !</p>
              ) : null}
              <div className="d-flex justify-content-center m-3">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#4200FF",
                    border: "1px solid white",
                    height: "3.6rem",
                    width: "7.5rem",
                    color: "white",
                  }}
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className=" btn-block me-2 rounded-pill"
                >
                  Confirm
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

export default Bookinlanding;

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Bookinlanding() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Bookinlanding;
