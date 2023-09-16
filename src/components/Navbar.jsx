import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div style={{ width: "1px", height: "57px", backgroundColor: "green" }}></div>
      <nav
        className='w-100 border-bottom top-0 position-fixed bg-white'
        style={{ zIndex: "999" }}>
        <div
          className='d-flex m-auto justify-content-between align-items-center p-2'
          style={{ maxWidth: "1200px" }}>
          <div className='d-flex align-items-center'>
            <Link to='/posts'>
              <img
                src={require("../assets/alt.webp")}
                alt='logo'
                className='rounded-circle border border-2 border-white'
                style={{ height: "40px" }}
              />
            </Link>
            {/* <div className='d-flex ms-2 '>
            <input
              type='text'
              className='search-style search-mobile fs-6 fw-lighter'
              placeholder='search'
            />
            <div>
              <button className='search-icon d-flex justify-content-center align-items-center px-2 bg-white'>
                <span class='material-symbols-outlined fs-6'>search</span>
              </button>
            </div>
          </div> */}
          </div>
          <div
            className='d-flex align-items-center justify-content-end'
            style={{ flex: "1" }}>
            <div class='searchbar'>
              <input
                class='search_input'
                type='text'
                name=''
                placeholder='Search...'
              />
              <a href='#' className='search_icon'>
                <span className='material-symbols-outlined'>search</span>
              </a>
            </div>
            <Link
              to='/create-post'
              className='button-style text-secondary text-decoration-none mx-2 px-2 ms-sm-3'
              style={{
                fontSize: "12px",
                height:'40px',
                lineHeight:'40px'
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
      </nav>
    </>
  );
};

export default Navbar;
