import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
  const nav=useNavigate()
  const cookie=new Cookies()
  const  jwt=cookie.get('x')
  if(jwt){
    var {user}=jwtDecode(jwt)
  }

  const handlelogout = ()=>{
cookie.remove('x')
nav('/')

  }
    return (
      <nav className="navbar navbar-expand-lg bg-body sticky-lg-top">
      <div className="container">
         <img src='.\img\heartcare.jpg' style={{height:"30px"}} alt='logo hospital'></img>
        <span  className="ms-1" style={{color:"#4200FF"}}>HealthCare</span>
     
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
            </li>

         
            <li className="nav-item">
              <p className="nav-link  ms-2" aria-disabled="true" style={{color:"#4200FF"}}>Doctors</p>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link  ms-2" aria-disabled="true">About us</Link>
            </li>
            <li className="nav-item">
              <Link to='/contactus' className="nav-link  ms-2" aria-disabled="true">Contact us</Link>
            </li>
          </ul>
          
{user? <div className="d-flex m-2" >
<Dropdown as={ButtonGroup}>
      <Button style={{backgroundColor:"white", height:"37px",color:"#4200FF"}} >Hi , {user.name}</Button>

      <Dropdown.Toggle  style={{backgroundColor:"white",border:"1px solid #4200FF",color:"#4200FF",height:"37px"}} 
       id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item >
          <Link to='/Profileuser' className='nav-link'>Profile</Link>
          </Dropdown.Item>
        {/* <Dropdown.Item  >
        {/* <Link to='Profileuser/appointant' className='nav-link'>your appointant</Link></Dropdown.Item> */}
    </Dropdown.Menu> 
    </Dropdown>
  <button className='ms-2 '
             style={{backgroundColor:"#4200FF",border:"1px solid white",height:"37px", width:"130px",color:"white"}}
             type="submit" onClick={handlelogout}>  Log Out</button>
          </div>
         :
         <div className="d-flex m-2" >
            <button className='rounded-pill'
             style={{backgroundColor:"#4200FF",border:"1px solid white",height:"34px", width:"120px",color:"white"}}
             type="submit">  <Link to="/Signin" className='nav-link' >Sign in</Link></button>
            <button className=" ms-2 rounded-pill "
             style={{backgroundColor:"white",border:"1px solid #4200FF",  width:"120px",color:"#4200FF"}} 
             type="submit">  <Link to="/Signup" className='nav-link' >sign up</Link></button>
          </div>
         
         }
         
         
         
         


        </div>
      </div>
    </nav>
    );
}

export default Navbar;

