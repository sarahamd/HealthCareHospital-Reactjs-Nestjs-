import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./footer";

const Aboutus = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="">
      <Navbar />

      <figure className=" container mt-5">
        {/* <h1 className='m-5 ms-0 mb-4' style={{fontWeight:"bold"}} >About US</h1> */}

        <div className="row">
          <div className="col-md-6">
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              Health<span style={{ color: "#4200ff" }}>Care</span>
            </span>{" "}
            Hospital in New Cairo is poised to be a leading private healthcare
            provider in Egypt, offering a comprehensive range of services:
            <br></br>
            <i
              className="fa-solid fa-minus m-2"
              style={{ color: "#4200ff" }}
            ></i>
            300 beds including Royal Rooms, Suites, NICU, PICU, CCU, and ICU.
            <br></br>
            <i
              className="fa-solid fa-minus m-2"
              style={{ color: "#4200ff" }}
            ></i>
            10 fully equipped operating rooms.
            <br></br>
            <i
              className="fa-solid fa-minus m-2"
              style={{ color: "#4200ff" }}
            ></i>
            ICU with 35 beds.
            <br></br>
            <i
              className="fa-solid fa-minus m-2"
              style={{ color: "#4200ff" }}
            ></i>
            20-bed emergency department.
            <br></br>
            <i
              className="fa-solid fa-minus m-2"
              style={{ color: "#4200ff" }}
            ></i>
            Specialized units for cardiovascular emergencies, catheterization,
            gastrointestinal and liver endoscopy, dentistry, maxillofacial
            surgery, open heart surgery, microscopic surgery, bariatric surgery,
            and interventional radiology.
            <br></br>
            <i
              className="fa-solid fa-minus m-2"
              style={{ color: "#4200ff" }}
            ></i>
            24/7 operating Specialized Radiology Center and laboratory with
            advanced technology.
          </div>
          <div className="col-md-6">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img src="/img/build1.jpg" width={"96%"} height={"390px"}></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/img/inside3.jpg"
                  width={"96%"}
                  height={"390px"}
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/img/inside8.jpg"
                  width={"96%"}
                  height={"390px"}
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </figure>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-md mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
                width={"100%"}
                height={"300px"}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Humanity First Indonesia"
              />
            </div>
          </div>
        </div>
      </article>
      <Footer></Footer>
    </section>
  );
};

export default Aboutus;
