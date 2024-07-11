import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const[showPassword,setShowPassword]=useState(false)
  const[confirm,setconfirm]=useState(false)
  const[flag,setflag]=useState(false)
var nav= useNavigate()
  const togglePasswordVisibility = useCallback(() => {
    
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);
  
  
    const toggleconfirmpass = useCallback(() => {
      setconfirm((prevconfirm) => !prevconfirm);
    }, []);
 
const  validationSchema= Yup.object({
  FullName: Yup.string()
    .max(10, 'Must be 10 characters or less').min(5,'Must be 5 characters or more')
    .required('Required'),
 
  email: Yup.string().email('Invalid email address').required('Required'),
  password:Yup.string().matches(/^[A-z][a-z0-9]{3,8}$/,'Invalid password ' ).required("Required"),
  confirmpassword:Yup.string().oneOf([Yup.ref('password')],'password and confirmpassword not matched').required("Required"),
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/,'Invalid number').required("Required"),
  gender:Yup.string().required('Required')
});

  let formik = useFormik({
    initialValues: {
      FullName: '',
     
      email: '',
      password:'',
      confirmpassword:'',
      phone:"",
      gender:""
    },
    validationSchema,
  
    onSubmit: values => {
console.log(values);
var {email,password,gender,FullName,phone}=values

      axios.post('http://localhost:3001/clients/register',{
        name:FullName,
        gender,
        email,
        password,
        phone,
        isAdmin:false,
        isdoctor:false,
        isclient:true,
        booking:[]
    } ).then((res)=>{
    
      if(res.data.message==='Your email is already exist please login '){
setflag(true)    

      }
else if(res.data.message==='Created successfully '){
nav('/signin')
}
    }) .catch((err)=>{
      console.error(err)
    })
    },
  });
    return (
        <div>
<section >

  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundcolor: "hsl(0, 0%, 96%)"}}>
    <div className="container-fluid">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-5 fw-bold ls-tight">
          Become a Member of  <br />
            <span style={{color:"#4200FF"}}>Our Hospital Community!</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
          Join our hospital's vibrant community by becoming a member today! By signing up, you gain access to exclusive benefits, stay informed about upcoming events and health initiatives, and contribute to shaping the future of healthcare in our community.
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
           
            <div className="card-body py-5 px-md-5">
              {/* avoid happen refresh */}
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div data-mdb-input-init className="form-outline"> 
                    <label htmlFor="FullName" className="form-label" >FullName </label>
                      <input 
                       id="FullName"
                       name="FullName"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.FullName}
                      className="form-control" />
                
                     {formik.errors.FullName && formik.touched.FullName ? ( <p className='text-danger'>{formik.errors.FullName}</p>):null}

                    </div>
                  </div>
                 
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email address</label>

                   <input 
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}

                      value={formik.values.email}
                      className="form-control" />
                      {formik.errors.email&&formik.touched.email ?
                      (<p className='text-danger'>{formik.errors.email}</p>
                      
                      ):null}
                      {flag?<p className='text-danger m-2'>Your Email is already exist please login</p>:null}
                </div>

               
                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="password">password</label>

                  <input 
                    type={showPassword ? 'text' : 'password'}

                            name="password" id="password"     
                             value={formik.values.password}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            className="form-control d-relative"/>


                              <i className={`fa-solid fa-eye${
                                showPassword ? '' : '-slash'
                              } position-absolute  translate-middle-y `}
                              onClick={togglePasswordVisibility}
                              style={{
                                height: '3.3rem',
                                cursor: 'pointer',
                                textAlign: 'center',
                                right:"70px",

                              }}>
                                
                              </i> 

          {formik.errors.password&&formik.touched.password ?(<p className='text-danger'>{formik.errors.password}</p>):null}

                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="confirmpassword">confirmpassword</label>

          <input                      
                   type={confirm ? 'text' : 'password'}
                   id="confirmpassword" name='confirmpassword'     
                      value={formik.values.confirmpassword}
                      onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control d-relative" />
                      <i className={`fa-solid fa-eye${
                        confirm ? '' : '-slash'
                      } position-absolute  translate-middle-y `}
                      onClick={toggleconfirmpass}
                      style={{
                        height: '3.3rem',
                        cursor: 'pointer',
                        textAlign: 'center',
                        right:"70px",
                      
                      }}>
                   </i> 

                     {formik.errors.confirmpassword && formik.touched.confirmpassword ? ( <p className='text-danger'>{formik.errors.confirmpassword}</p>):null}

                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor='phone' >phone</label>

                  <input type="tel"  name="phone" id="phone"    
                      value={formik.values.phone}
                      onChange ={formik.handleChange} onBlur={formik.handleBlur}className="form-control" />
                                           {formik.errors.phone && formik.touched.phone ? ( <p className='text-danger'>{formik.errors.phone}</p>):null}

                </div>
                <div data-mdb-input-init className="form-outline m-4 text-center">
                  <input type="radio" id="female"     
                      value="female"
 onChange={formik.handleChange} onBlur={formik.handleBlur} name='gender'  />
                  <label className="ms-3 " htmlFor="female"  >female</label>

                  <input type="radio" id="male" name='gender'   value="male"
 onChange={formik.handleChange} onBlur={formik.handleBlur}className="ms-5"/>
                  <label className="ms-3" htmlFor="male">male</label>

                </div>
                {formik.errors.gender && formik.touched.gender ? ( <p className='text-danger'>{formik.errors.gender}</p>):null}


            

          <div className=' text-center mt-5'> 
         
                <button type="submit"style={{backgroundColor:"#4200FF",border:"1px solid white",height:"2.6rem", width:"21rem",color:"white"}} data-mdb-button-init data-mdb-ripple-init className=" btn-block me-2 rounded-pill  ">

                Signup
                </button>
                <p className='mt-5'>Already have account <Link to="/Signin" className='fs-5 ' >Login</Link> </p>

</div>

              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

        </div>
    );
}

export default Signup;
