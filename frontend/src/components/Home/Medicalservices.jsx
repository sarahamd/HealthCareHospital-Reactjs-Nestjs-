import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMicroscope,faTruckMedical,faLaptopMedical,faHeadset} from '@fortawesome/free-solid-svg-icons'; 
const Medicalservices = () => {
    return (
        <div>
            <div className='container p-5'>
                <div className="row text-center">
                    <h1><span style={{color:"#4200FF"}}>O</span>ur Medical Services</h1>
                    <p style={{color:"#A7A7A7"}}>We are dedicated to serve you
 best medical services</p>
                </div>
<div className="row mt-4 justify-content-center ">
<div className="card m-2 " style={{width: "17.5rem",height:"9rem"}}>
  <div className="card-body text-center ">
    <h5 className="card-title  fs-1" style={{color:"#4200ff"}} ><FontAwesomeIcon icon={faMicroscope} /></h5>
    
    <p className="card-text mt-4">Well equipped lab</p>
   
  </div>

</div>
<div className="card m-2 " style={{width: "17.5rem",height:"9rem"}}>
  <div className="card-body text-center">
    <h5 className="card-title fs-1" style={{color:"#4200ff"}} ><FontAwesomeIcon icon={faTruckMedical} /></h5>
    <p className="card-text mt-4">Emergency Ambulance</p>
   
  </div>

</div>
<div className="card m-2 " style={{width: "17.5rem",height:"9rem"}}>
  <div className="card-body text-center">
    <h5 className="card-title fs-1" style={{color:"#4200ff"}} ><FontAwesomeIcon icon={faLaptopMedical} /></h5>
    <p className="card-text mt-4">Online Appointment</p>
   
  </div>

</div>
<div className="card m-2 " style={{width: "17.5rem",height:"9rem"}}>
  <div className="card-body text-center">
    <h5 className="card-title fs-1" style={{color:"#4200ff"}} ><FontAwesomeIcon icon={faHeadset} /></h5>
    <p className="card-text mt-4">Call Center</p>
   
  </div>

</div>
</div>
            </div>
        </div>
    );
}

export default Medicalservices;
