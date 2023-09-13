import React from "react";
import Sidebar from "./Sidebar";
import { useGlobal } from "../Context/context";
import NavbarNoSearch from "./NavbarNoSearch";
const Conversations = () => {
  const { switchSidebar } = useGlobal();
  return (
    <>
      <NavbarNoSearch />
      <div
        className='m-auto d-flex'
        style={{ maxWidth: "1000px", backgroundColor: "#EEEEEE" }}>
        <Sidebar />
        <div
          className='d-flex w-100 m-auto'
          style={{ height: "calc(100vh - 57px)" }}>
          {/* ---------------- Topbar -------------- */}
          <div className='w-100 d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-between bg-white'>
              <div className='d-flex align-items-center'>
                <button
                  className='ps-4 pe-1 border-0 bg-white'
                  onClick={switchSidebar}>
                  <span class='material-symbols-outlined fs-2'>menu</span>
                </button>
                <div className='p-3'>
                  <img
                    src={require("../assets/alt.webp")}
                    alt='profile'
                    className='rounded-circle border border-2 border-white img-mobile'
                    style={{ height: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className='pt-3 text-mobile'>
                  <h5 className='p-0 m-0 fw-bold fs-6'>Flora</h5>
                  <h6 className='p-0 m-0 small'>Areno Infrastructure Inc</h6>
                  <p className='p-0 m-0 small'>
                    Infrastructure - Service, USA, California.
                  </p>
                  <button className='p-0 m-0 border-0 bg-transparent small'>
                    View Profile
                  </button>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center pe-2 pe-sm-5'>
                <div class='d-flex form-check form-switch'>
                  <p className='p-0 m-0 d-none d-sm-block'>OFF</p>
                  <input
                    className='form-check-input mx-sm-2 switch-styling'
                    type='checkbox'
                    role='switch'
                    id='flexSwitchCheckDefault'
                  />
                  <label
                    className='form-check-label d-none d-sm-block'
                    for='flexSwitchCheckDefault'>
                    Mute
                  </label>
                </div>
              </div>
            </div>
            <div
              className='overflow-auto d-flex flex-column w-100'
              style={{ height: "calc(100vh - 211px)" }}>
              <div className='left-side-msg'>
                <p className='py-1 m-0'>12-12-2022 12:30PM</p>
                <p className='p-0 m-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='right-side-msg'>
                <p className='py-1 m-0 text-white'>12-12-2022 12:30PM</p>
                <p className='p-0 m-0 text-white'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='right-side-msg'>
                <p className='py-1 m-0 text-white'>12-12-2022 12:30PM</p>
                <p className='p-0 m-0 text-white'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='left-side-msg'>
                <p className='py-1 m-0'>12-12-2022 12:30PM</p>
                <p className='p-0 m-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='left-side-msg'>
                <p className='py-1 m-0'>12-12-2022 12:30PM</p>
                <p className='p-0 m-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='right-side-msg'>
                <p className='py-1 m-0 text-white'>12-12-2022 12:30PM</p>
                <p className='p-0 m-0 text-white'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
            </div>
            <div className='bg-white'>
              <div className=''>
                <form action=''>
                  <div className='w-100'>
                    <div className='d-flex align-items-center justify-content-center'>
                      {/* <button class='btn-file bg-white border-0'>
                        <span class='material-symbols-outlined fs-2 p-2'>
                          attach_file
                        </span>
                        <input type='file' />
                      </button> */}
                      <div class='send-bar w-100 mx-1'>
                        <input
                          type='text'
                          className='form-control border-0 rounded-5 my-2'
                          style={{ backgroundColor: "#EFEFEF" }}
                          name='chat'
                          id='chat'
                        />
                      </div>
                      <button class='bg-white border-0'>
                        <span class='material-symbols-outlined fs-2 p-2'>send</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversations;
