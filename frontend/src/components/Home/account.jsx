import React from 'react';



function Account({userData}) {
  return (
    <div>
      <div
        className="w-100 border-bottom"
        style={{ backgroundColor: '#cccccc13' }}
      >
        <h4 className="p-3 mb-0"  style={{ color:"#4200ff" }}><i
                            className="fa-regular fa-user me-3"
                            style={{ width: '20px'}}
                          />
                          Account Overview</h4>
      </div>
      <div className="card-body">
        <div className="mb-5">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="../../img/Capture.PNG"
              alt="Admin"
              className="rounded-circle"
              width={150}
            />
            <div className="mt-3">
              <h4>{userData?.name}</h4>
              <p className="text-secondary mb-1">ID: {userData?.id}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">{userData?.name}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">{userData?.email}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Phone</h6>
          </div>
          <div className="col-sm-9 text-secondary">{userData?.phone}</div>
        </div> <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">gender</h6>
          </div>
          <div className="col-sm-9 text-secondary">{userData?.gender}</div>
        </div>
     
      </div>
    </div>
  );
}


export default Account;
