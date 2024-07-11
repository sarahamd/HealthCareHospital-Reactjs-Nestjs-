import React, { useCallback, useState } from 'react';
import {
  
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';



const Signin = () => {
const nav=useNavigate()
  const[showPassword,setShowPassword]=useState(false)
  const[flag,setflag]=useState(false)
  const togglePasswordVisibility = useCallback(() => {
    
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);
  const loginform = useFormik({
    initialValues: {
     
      email: '',
      password: ''
    },
    
    onSubmit: (values) => {
 var {email,password}=values
 axios.post('http://localhost:3001/clients/login',{
  email,
  password
 }).then((res)=>{
  var {data}=res
  var {message,JWT}=data
  
 if(message==='Logged-In Successfully'){
  const cookies = new Cookies(null, { path: '/' });
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 10);
  cookies.set('x', JWT, { expires: expirationDate });
  nav('/')
 }else if(message==="Invalid Email Or Password !"){
setflag(!false)
 }
 })
    }
  });


  return (
    <MDBContainer>
      <form onSubmit={loginform.handleSubmit}>
        <MDBRow className='justify-content-center align-items-center m-5'>
          <MDBCard>
            <MDBCardBody className='px-4'>
              <h3 className="fw-bold mb-4 pb-2 text-center pb-md-0 mb-md-5">
                Welcome to<span style={{ color: "#4200ff", fontSize: "46px" }}>HealthCare</span>
                <br></br>
                <p style={{ fontSize: "39px" }}>Sign In</p>
              </h3>
             
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput
                    wrapperClass='m-3'
                    placeholder='Email'
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}

                    value={loginform.values.email}
                    id='email'
                    name='email'
                    type='email'
                  />
                             
                </MDBCol>
                <MDBCol md='12'>
                  <MDBInput
                    wrapperClass='m-3'
                    placeholder='Password'
                    onChange={loginform.handleChange}
                    onBlur={loginform.handleBlur}

                    name='password'
                    value={loginform.values.password}
                    id='form1'
                    type= {showPassword ?' text':'password'}
                  />
  <i className={`fa-solid fa-eye${
                                showPassword ? '' : '-slash'
                              } position-absolute  translate-middle-y `}
                              onClick={togglePasswordVisibility}
                              style={{
                                height: '5.2rem',
                                cursor: 'pointer',
                                textAlign: 'center',
                                right:"70px",

                              }}>
                                
                              </i>  
                                       {flag ?<p className='text-danger m-5'> Invalid Email Or Password !</p>: null}

                </MDBCol>

              </MDBRow>
              <div className='d-flex justify-content-center m-3'>
                <button
                  type="submit"
                  style={{ backgroundColor: "#4200FF", border: "1px solid white", height: "2.6rem", width: "6rem", color: "white" }}
                  data-mdb-button-init data-mdb-ripple-init
                  className=" btn-block me-2 rounded-pill"
                >
                  Sign in
                </button>
              </div>
              
            </MDBCardBody>
            
            
          </MDBCard>
        </MDBRow>
       
      </form>
    </MDBContainer>
  );
}

export default Signin;
