

import React from 'react';

import { NavLink, useParams } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './footer';
import Account from './account';
import Appointant from './appointant';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

const Profileuser = () => {
const {params}=useParams()
const Cookie=new Cookies()
    const data=Cookie.get('x')
   
        const {user}=jwtDecode(data)


  return (
    <>
<Navbar></Navbar>
      <div id="profile"className='m-5' >
        <div className="container ">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                      <NavLink className="nav-link w-100" to="/Profileuser/account">
                        <h6 className="m-3">
                          <i
                            className="fa-regular fa-user me-3"
                            style={{ width: '20px' }}
                          />
                          Profile
                        </h6>
                      </NavLink>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'  >
                      <NavLink className="nav-link w-100" to="/Profileuser/Appointant">
                      {/* <NavLink className="nav-link w-100"> */}
                        <h6 className="m-3">
                          <i
                            className="fa-solid fa-calendar-days me-2" aria-hidden="true"
                            style={{ width: '20px' }}
                          ></i>
                          Appointant
                        </h6>
                      </NavLink>
                    </li>

                   
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  {params === 'account' && <Account  userData={user}/>}
                  {params === 'Appointant' && <Appointant  userData={user} />}
                  {!params && <Account userData={user} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Profileuser;
