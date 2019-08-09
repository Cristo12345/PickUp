import React from "react";



const Welcome = (props) => {
  return (
    <div className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col p-0 col-style d-flex flex-column align-items-center justify-content-around text-center">
          <h1 className="title display-1 font-weight-bold outline">
            <strong>Soccer Events</strong>
          </h1>
          <div className="mb-2">
            <a className="btn btn-clear btn-lg btn-min-block welcome-buttons-bg outline-sm m-2" href="/login" style={{ fontSize: '1.6rem' }}>
              <strong>Login</strong>
            </a>
            <a className="btn btn-clear btn-lg btn-min-block m-2"
              href="/register" style={{ fontSize: '1.6rem' }}>
              <strong>Register</strong>
            </a>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Welcome;




