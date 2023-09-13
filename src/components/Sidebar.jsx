import React from "react";
import { useGlobal } from "../Context/context";

const Sidebar = () => {
  const { isSidebarOpen, switchSidebar } = useGlobal();
  return (
    <div>
      <div
        className='sidebar-mobile'
        style={{
          height: "100vh - 57px",
          width: `${isSidebarOpen ? "354px" : "0px"}`,
        }}></div>
      <div
        className='position-fixed bg-white duration'
        style={{
          zIndex: "5",
          width: "354px",
          height: "100vh",
          display: `${isSidebarOpen ? "block" : "none"}`,
        }}>
        <div className='bg-white'>
          <div>
            <div>
              <img
                src={require("../assets/alt.webp")}
                alt='cover'
                className='w-100'
                style={{ height: "102px", objectFit: "cover" }}
              />
            </div>
            <div
              style={{ margin: "10px" }}
              className='d-flex justify-content-end align-self-center '>
              <div className='d-flex justify-content-between align-items-center w-100'>
                <button
                  className='button-style'
                  style={{
                    fontSize: "12px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}>
                  Home
                </button>
                <button
                  className='button-style'
                  style={{
                    fontSize: "12px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                  }}>
                  Start a Post
                </button>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <a href='#' style={{ color: "gray" }}>
                  <span
                    className='material-symbols-outlined'
                    style={{
                      width: "20px",
                      height: "20px",
                      paddingTop: "5px",
                      margin: "0 10px",
                    }}>
                    settings
                  </span>
                </a>
              </div>
              <div
                className='position-absolute'
                style={{ top: "3rem", right: "calc(50% - 30px)" }}>
                <img
                  src={require("../assets/alt.webp")}
                  alt='profile'
                  className='rounded-circle border border-3 border-white'
                  style={{ height: "100px", objectFit: "cover" }}
                />
              </div>
              <button
                className='position-absolute border-0 d-sm-none bg-transparent'
                style={{ top: "5px", right: "5px" }}
                onClick={switchSidebar}>
                <span class='material-symbols-outlined fs-1 fw-bolder text-bg-light text-secondary rounded-circle'>
                  close
                </span>
              </button>
            </div>
          </div>
          <div className='mb-3'>
            <div style={{ width: "95%", margin: "auto" }}>
              <form action='' class='search-form'>
                <div class='search-bar'>
                  <input
                    type='text'
                    className='form-control border-0 rounded-5'
                    style={{ backgroundColor: "#EFEFEF" }}
                    name='search'
                    id='search'
                  />
                </div>
              </form>
            </div>
          </div>
          {/* ------------ Empty Sidebar ---------- */}
          {/* <div className="w-100 d-flex flex-column align-items-center">
          <img
            src={require("../assets/sidebar.png")}
            alt=''
            className="mt-5"
            style={{ width: "auto", height: "250px", margin: "auto" }}
          />
          <p>Let's find your audience</p>
        </div> */}
          {/* ----------- Full Sidebar------------ */}
          <ul
            className='list-group list-group-flush'
            style={{
              overflowY: "auto",
              maxHeight: "calc(100vh - 296px)",
              position: "relative",
            }}>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile '
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='p-0 m-0 small'>Recent messages here...</p>
                    <p className='d-flex align-items-center fw-bold text-secondary'>
                      3
                      <span
                        class='material-symbols-rounded'
                        style={{ color: "#B6D7A8" }}>
                        fiber_manual_record
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <p className='p-0 m-0 small'>Recent messages here...</p>
                </div>
              </div>
            </li>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <p className='p-0 m-0 small'>Recent messages here...</p>
                </div>
              </div>
            </li>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <p className='p-0 m-0 small'>Recent messages here...</p>
                </div>
              </div>
            </li>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <p className='p-0 m-0 small'>Recent messages here...</p>
                </div>
              </div>
            </li>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <p className='p-0 m-0 small'>Recent messages here...</p>
                </div>
              </div>
            </li>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <p className='p-0 m-0 small'>Recent messages here...</p>
                </div>
              </div>
            </li>
            <li
              href='#'
              className='list-group-item list-group-item-action borderless'>
              <div className='d-flex'>
                <div>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='d-flex flex-column align-content-center justify-content-center w-100 ps-3'>
                  <div className='d-flex justify-content-between'>
                    <h6 className='p-0 m-0 fw-bold small'>Username</h6>
                    <p className='p-0 m-0 small'>12:19PM</p>
                  </div>
                  <p className='p-0 m-0 small'>Recent messages here...</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
