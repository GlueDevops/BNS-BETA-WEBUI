import React from "react";
import Navbar from "./Navbar";
const UserProfile = () => {
  return (
    <div className="bg-light">
      <Navbar />
      <div className='d-flex m-auto bg-white' style={{maxWidth:'1000px',minHeight:'calc(100vh - 57px)'}}>
        <div className='w-100 position-relative'>
          <div>
            <img
              src={require("../assets/alt.webp")}
              alt='cover'
              className='w-100'
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>
          <div
            className='position-absolute'
            style={{ top: "7rem", right: "calc(50% - 75px)" }}>
            <img
              src={require("../assets/alt.webp")}
              alt='profile'
              className='rounded-circle border border-2 border-white shadow'
              style={{ height: "150px", objectFit: "cover" }}
            />
          </div>
          <div className='d-flex justify-content-end align-items-center pe-4 pt-4'>
            <div class='d-flex form-check form-switch'>
              <p className='p-0 m-0 d-none d-sm-block'>OFF</p>
              <input
                className='form-check-input mx-2 switch-styling'
                type='checkbox'
                role='switch'
                id='flexSwitchCheckDefault'
              />
              <label class='form-check-label' for='flexSwitchCheckDefault'>
                Mute
              </label>
            </div>
          </div>
          <div className='w-100 fw-semibold text-center pt-4'>
            <h2 className=''>Areno Infrastructure Inc</h2>
            <p className='py-2 m-0 small'>Infrastructure - Service</p>
            <p className='p-0 m-0 fw-bold'>Flora</p>
            <a href='#' className='p-0 m-0 small'>
              john_smith@areno.com
            </a>
            <p className='p-0 m-0 small'>www.areno.com</p>
            <p className='py-2 m-0 small'>USA, California</p>
          </div>
          <div className='w-100 text-center'>
            <button
              className='btn rounded-5 text-white px-4 my-4 fw-lighter'
              style={{ backgroundColor: "#5034A1" }}>
              Start Conversations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
