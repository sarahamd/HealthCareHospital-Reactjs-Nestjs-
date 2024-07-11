import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight ,faPlay} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import Bookinlanding from './bookinlanding';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Landingpage = () => {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div>
    <div className="container mt-5 ">
        <div className="row ">
            <div className="mt-5 col-lg-7 col-md-7 col-sm-6 ">
              <div >
                <span style={{color:"#4200FF",fontSize:"55px",fontWeight:"bold"}}>we care</span>
                <span style={{fontSize:"35px",fontWeight:"bold"}}> about your health</span>
                <p  className="mt-2"style={{color:"#A7A7A7"}}>Good health is the state of mental, physical and social well being
and it does not just mean absence of diseases.</p>

<button className='rounded mt-2 '
 style={{backgroundColor:"#4200FF",border:"1px solid white",height:"54px", width:"320px",color:"white"}}
 type="submit" onClick={handleShow} >Make an Appointment
  <span className='ms-3'>
    <FontAwesomeIcon icon={faArrowRight}/></span></button>
 <Modal show={show}   size="lg" onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title  style={{color:"#4200ff"}}>Make an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body><Bookinlanding/> </Modal.Body>
       
      </Modal>
 

    <span  className=" ms-3" style={{color:"#4200FF",width:"90px",fontSize:"25px"}}><FontAwesomeIcon icon={faPlay} /> </span>
   <span style={{fontSize:"24 px"}}> watch video</span>
   <div className='mt-3  '>
    Become member of our hospital community ? <span style={{color:"#4200FF"}}  >
        <Link to="/Signup" >sign up</Link>
         </span>
   </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6  ">
            <img src="./img/doctors3.jpg" className="w-100 nav-item"  alt="group of doctors"></img>

            </div>
            <div>

   

  </div>
         
        </div>
    </div>
        </div>
    );
}

export default Landingpage;
