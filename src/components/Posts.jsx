import React from "react";
import Navbar from "./Navbar";

const Posts = () => {
  return (
    <>
    <Navbar/>
      <div className='w-100 bg-light px-4' style={{minHeight:'calc(100vh - 57px'}}>
        <div className='m-auto pt-3' style={{ maxWidth: "1200px" }}>
          <div className='row row-cols-1 gap-3 justify-content-center'>
          <div
              className='bg-white rounded-4 p-4 col m-0'
              style={{ maxWidth: "395px" }}>
              <div className='d-flex align-items-center'>
                <img
                  src={require("../assets/alt.webp")}
                  alt='profile'
                  className='rounded-circle border border-2 border-white'
                  style={{ height: "50px", objectFit: "cover" }}
                />
                <div className='ps-3'>
                  <h5 className='p-0 m-0 fw-bold fs-6'>Flora</h5>
                  <h6 className='p-0 m-0 small'>Areno Infrastructure Inc</h6>
                  <p className='p-0 m-0 small fw-lighter'>
                    Infrastructure - Service, USA, California.
                  </p>
                </div>
              </div>
              <div className='my-5'>
                <h5 className='m-0 p-0 fw-semibold'>Human Resource</h5>
                <p className='m-0 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4'>
                <div className='d-flex'>
                  <span class='material-symbols-outlined'>label</span>
                  <p className='p-0 m-0'>Skills</p>
                </div>
                <button className='position-relative button-style rounded-circle p-0 m-0' style={{height:'40px', width:'40px'}}>
                  <span class='material-symbols-outlined chat-icon'>chat_bubble</span>
                </button>
              </div>
            </div>
            <div
              className='bg-white rounded-4 p-4 col m-0'
              style={{ maxWidth: "395px" }}>
              <div className='d-flex align-items-center'>
                <img
                  src={require("../assets/alt.webp")}
                  alt='profile'
                  className='rounded-circle border border-2 border-white'
                  style={{ height: "50px", objectFit: "cover" }}
                />
                <div className='ps-3'>
                  <h5 className='p-0 m-0 fw-bold fs-6'>Flora</h5>
                  <h6 className='p-0 m-0 small'>Areno Infrastructure Inc</h6>
                  <p className='p-0 m-0 small fw-lighter'>
                    Infrastructure - Service, USA, California.
                  </p>
                </div>
              </div>
              <div className='my-5'>
                <h5 className='m-0 p-0 fw-semibold'>Human Resource</h5>
                <p className='m-0 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4'>
                <div className='d-flex'>
                  <span class='material-symbols-outlined'>label</span>
                  <p className='p-0 m-0'>Skills</p>
                </div>
                <button className='position-relative button-style rounded-circle p-0 m-0' style={{height:'40px', width:'40px'}}>
                  <span class='material-symbols-outlined chat-icon'>chat_bubble</span>
                </button>
              </div>
            </div>
            <div
              className='bg-white rounded-4 p-4 col m-0'
              style={{ maxWidth: "395px" }}>
              <div className='d-flex align-items-center'>
                <img
                  src={require("../assets/alt.webp")}
                  alt='profile'
                  className='rounded-circle border border-2 border-white'
                  style={{ height: "50px", objectFit: "cover" }}
                />
                <div className='ps-3'>
                  <h5 className='p-0 m-0 fw-bold fs-6'>Flora</h5>
                  <h6 className='p-0 m-0 small'>Areno Infrastructure Inc</h6>
                  <p className='p-0 m-0 small fw-lighter'>
                    Infrastructure - Service, USA, California.
                  </p>
                </div>
              </div>
              <div className='my-5'>
                <h5 className='m-0 p-0 fw-semibold'>Human Resource</h5>
                <p className='m-0 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4'>
                <div className='d-flex'>
                  <span class='material-symbols-outlined'>label</span>
                  <p className='p-0 m-0'>Skills</p>
                </div>
                <button className='position-relative button-style rounded-circle p-0 m-0' style={{height:'40px', width:'40px'}}>
                  <span class='material-symbols-outlined chat-icon'>chat_bubble</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
