import React from "react";
import Navbar from "./Navbar";

const MyPosts = () => {
  return (
    <>
      <Navbar />
      <div
        className='w-100 bg-light px-4'
        style={{ minHeight: "calc(100vh - 57px" }}>
        <div className='m-auto pt-3' style={{ maxWidth: "1200px" }}>
          <div className='row row-cols-1 gap-3 justify-content-center'>
            <div
              className='bg-white rounded-4 p-4 col m-0'
              style={{ maxWidth: "395px" }}>
              <div className='d-flex justify-content-end'>
                <button
                  className='button-style'
                  style={{ backgroundColor: "#d9d9d9", fontSize: "13px" }}>
                  {" "}
                  1K Responses
                </button>
              </div>
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
              <div>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  className='w-100 my-3 rounded-2'
                />
              </div>
              <div
                className='d-flex justify-content-between mb-3'
                style={{ fontSize: "10px" }}>
                <p className='p-0 m-0'>Created at 20-02-2022</p>
                <p className='p-0 m-0'>Updated at 20-02-2022</p>
              </div>
              <div className=''>
                <div className='d-flex justify-content-between mb-1'>
                  <h5 className='m-0 p-0 fw-semibold'>Human Resource</h5>
                  <p>150$</p>
                </div>
                <pre
                  style={{
                    fontSize: "14px",
                    marginBottom: "0",
                    fontWeight: "bold",
                  }}>
                  09:00 AM → 05:00 PM Until 2023-12-31
                </pre>
                <p className='m-0 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <pre className='my-2 fw-light'>Expires on 20-02-2022</pre>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                  <span class='material-symbols-outlined'>label</span>
                  <p className='p-0 m-0'>Skills</p>
                </div>
                <div className='d-flex gap-2'>
                  <button className='button-style'>Inactive</button>
                  <button className='button-style'>Edit</button>
                </div>
              </div>
            </div>
            <div
              className='bg-white rounded-4 p-4 col m-0'
              style={{ maxWidth: "395px" }}>
              <div className='d-flex justify-content-end'>
                <button
                  className='button-style'
                  style={{ backgroundColor: "#d9d9d9", fontSize: "13px" }}>
                  {" "}
                  1K Responses
                </button>
              </div>
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
              <div>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  className='w-100 my-3 rounded-2'
                />
              </div>
              <div
                className='d-flex justify-content-between mb-3'
                style={{ fontSize: "10px" }}>
                <p className='p-0 m-0'>Created at 20-02-2022</p>
                <p className='p-0 m-0'>Updated at 20-02-2022</p>
              </div>
              <div className=''>
                <div className='d-flex justify-content-between mb-1'>
                  <h5 className='m-0 p-0 fw-semibold'>Human Resource</h5>
                  <p>150$</p>
                </div>
                <pre
                  style={{
                    fontSize: "14px",
                    marginBottom: "0",
                    fontWeight: "bold",
                  }}>
                  09:00 AM → 05:00 PM Until 2023-12-31
                </pre>
                <p className='m-0 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <pre className='my-2 fw-light'>Expires on 20-02-2022</pre>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                  <span class='material-symbols-outlined'>label</span>
                  <p className='p-0 m-0'>Skills</p>
                </div>
                <div className='d-flex gap-2'>
                  <button className='button-style'>Inactive</button>
                  <button className='button-style'>Edit</button>
                </div>
              </div>
            </div>
            <div
              className='bg-white rounded-4 p-4 col m-0'
              style={{ maxWidth: "395px" }}>
              <div className='d-flex justify-content-end'>
                <button
                  className='button-style'
                  style={{ backgroundColor: "#d9d9d9", fontSize: "13px" }}>
                  {" "}
                  1K Responses
                </button>
              </div>
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
              <div>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  className='w-100 my-3 rounded-2'
                />
              </div>
              <div
                className='d-flex justify-content-between mb-3'
                style={{ fontSize: "10px" }}>
                <p className='p-0 m-0'>Created at 20-02-2022</p>
                <p className='p-0 m-0'>Updated at 20-02-2022</p>
              </div>
              <div className=''>
                <div className='d-flex justify-content-between mb-1'>
                  <h5 className='m-0 p-0 fw-semibold'>Human Resource</h5>
                  <p>150$</p>
                </div>
                <pre
                  style={{
                    fontSize: "14px",
                    marginBottom: "0",
                    fontWeight: "bold",
                  }}>
                  09:00 AM → 05:00 PM Until 2023-12-31
                </pre>
                <p className='m-0 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
              </div>
              <pre className='my-2 fw-light'>Expires on 20-02-2022</pre>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                  <span class='material-symbols-outlined'>label</span>
                  <p className='p-0 m-0'>Skills</p>
                </div>
                <div className='d-flex gap-2'>
                  <button className='button-style'>Inactive</button>
                  <button className='button-style'>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPosts;
