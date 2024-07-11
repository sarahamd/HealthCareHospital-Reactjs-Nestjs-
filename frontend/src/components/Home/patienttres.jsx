import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Patienttres = () => {
    return (
        <>
        <div className="row text-center m-3">
            <h2>Patients Testimonial</h2>
            <p style={{color:"#A7A7A7"}}>Let’s see what our happy patients says</p>
        </div>
        <Carousel>
      <Carousel.Item> 
 <div className="row justify-content-center "> 
   < div className="card m-1" style={{width: '24rem'}}>

<div className="card-body">
<img src='./img/p5.jpg' className=' rounded-4' width="47px" height="39px"></img><span>Monuir Mohamed</span>
  <p className="card-text mt-3">My experience at this hospital exceeded all expectations. The staff demonstrated professionalism</p>
</div>
</div>
    < div className="card m-1" style={{width: '24rem'}}>

<div className="card-body">
<img src='./img/p6.jpg' className=' rounded-4' width="47px" height="39px"></img><span> Osama Mohamed</span>
  <p className="card-text mt-3">I highly recommend this hospital to anyone in need of medical care. The facilities are state-of-the-art</p>
</div>
</div>
< div className="card m-1" style={{width: '24rem'}}>

<div className="card-body">
<img src='./img/p3.jpg' className=' rounded-4' width="47px" height="39px"></img><span> Mostafa Mohamed</span>
  <p className="card-text mt-3">I cannot express my gratitude enough for the outstanding treatment I received at this hospital.</p>
</div>
</div></div>
     
      </Carousel.Item> 
      <Carousel.Item>
      <div className="row justify-content-center ">
    < div className="card m-1" style={{width: '24rem'}}>

<div className="card-body">
    <img src='./img/p1.jpg' className=' rounded-4' width="47px" height="39px"></img><span> Ahmed Mohamed</span>
  <p className="card-text mt-3">Exceptional care and professionalism! From the moment I stepped into the hospital, I felt welcomed and cared for.</p>
</div>
</div>
    < div className="card m-1" style={{width: '24rem'}}>

<div className="card-body">
<img src='./img/p2.jpg' className=' rounded-4' width="47px" height="39px"></img><span> Mohamed Mohamed</span>
  <p className="card-text mt-3">Words cannot express how grateful I am for the exceptional care I received at this hospital.</p>
</div>
</div>
< div className="card m-1" style={{width: '24rem'}}>

<div className="card-body">
<img src='./img/p4.jpg' className=' rounded-4' width="47px" height="39px"></img><span> Nour Mohamed</span>
  <p className="card-text mt-3">Thank you to the entire team at this hospital for their outstanding care and support. From the moment I arrived, I was treated with kindness and respect.</p>
</div>
</div></div>
      </Carousel.Item>
  
    </Carousel>
 {/* <div className='text-center container-fluid m-5'>
 
 </div> */}
    </>
    );}


export default Patienttres;
