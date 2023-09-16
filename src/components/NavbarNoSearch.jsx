import React from "react";
import { Link } from "react-router-dom";
const NavbarNoSearch = () => {
  return (
    <>
      <div style={{ width: "1px", height: "57px", backgroundColor: "green" }}></div>
      <nav
        className='w-100 border-bottom top-0 position-fixed bg-white'
        style={{ zIndex: "999" }}>
        <div
          className='d-flex m-auto justify-content-between align-items-center p-2'
          style={{ maxWidth: "1200px" }}>
          <Link to='/posts' className='d-flex align-items-center'>
            <img
              src={require("../assets/alt.webp")}
              alt='logo'
              className='rounded-circle border border-2 border-white'
              style={{ height: "40px" }}
            />
          </Link>
          <div>
            <div className='d-flex align-items-center'>
              <Link
                to='/create-post'
                className='button-style text-secondary text-decoration-none mx-2 px-2'
                style={{
                  fontSize: "12px",
                  height: "40px",
                  lineHeight: "40px",
                }}>
                <span class='material-symbols-outlined post-icon'>post_add</span>
              </Link> 
              <Link to='/conversations' className='d-flex ms-sm-3'>
                <span
                  className='material-symbols-rounded'
                  style={{ color: "#B6D7A8" }}>
                  chat_bubble
                </span>
                <p className='fw-bold m-0 ps-sm-1'>12</p>
              </Link>
              <Link to='/profile'>
                <img
                  src={require("../assets/alt.webp")}
                  alt='logo'
                  className='rounded-circle border border-2 border-white ms-sm-3 ms-1'
                  style={{ height: "40px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarNoSearch;
