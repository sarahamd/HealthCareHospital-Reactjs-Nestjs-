

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Ourdoctor = () => {
    const [rating, setRating] = useState(0)
const [data,setdata]=useState(null)
const [visibleitem,setvisibleitem]=useState(4)
const [flag,setflag]=useState(false)
    async function doctordata(){
     await axios.get('http://localhost:3001/doctors').then((res)=>{
setdata(res.data);

     })
    }

    const restofddata=()=>{
setvisibleitem(6)
setflag(true)
    }
    const lessdata=()=>{
setvisibleitem(4)
setflag(false)
    }




    useEffect(()=>{
      doctordata()
    },[])
    return (
        <div>
          
               <div className='container mt-2 '>
                <div className="row  text-center">
                    <h1><span style={{color:"#4200FF"}}>M</span>eet Our Doctors</h1>
                    <p style={{color:"#A7A7A7"}}>Well  qualified doctors are ready to serve you</p>
                </div>

<div className="row m-5 justify-content-center align-items-center ">
{data?.slice(0,visibleitem).map((res)=>(
   <div key={res.id} className="col-lg-4  col-md-6 col-sm-10">
<div   className="card m-4 " style={{width: "20rem"}}>
 
  <div className="card-body text-center m-2">
  <img src={res.image} className='w-100 ' style={{height:"18rem"}} alt='doctor'/>
    <h5 className="card-text  mt-2">{res.name}</h5>
    <span className="card-text   mt-2">{res.department}</span>
    <div>
      {[1, 2, 3, 4, 5].map((star,i) => {
        return (  
          <span
          key={i}
            className='start'
            style={{
              cursor: 'pointer',
              color: rating >= star ? '#4200ff' : '#4200ff',
              fontSize: `25px`,
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
    <button className='rounded '
 style={{border:"1px solid #4200FF",height:"30px", width:"200px",color:"#4200FF"}}type="submit">Book on appointment
  </button>
   
  </div>
</div>
</div>
))}
 



</div>
 



<div className='text-center'>
{flag?
(<button className='rounded-pill m-3' onClick={()=>{lessdata()}}
 style={{backgroundColor:"#4200FF",border:"1px solid white",height:"34px", width:"120px",color:"white"}}type="submit">
  See less</button> ) :
  (<button className='rounded-pill m-3' onClick={()=>{restofddata()}}
 style={{backgroundColor:"#4200FF",border:"1px solid white",height:"34px", width:"120px",color:"white"}}type="submit">
  See More</button>)}
 
</div>

            </div>
        </div>
    );
}

export default Ourdoctor;
