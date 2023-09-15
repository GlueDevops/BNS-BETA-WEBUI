import React from "react";
import NavbarNoSearch from "./NavbarNoSearch";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className='bg-light'>
      <NavbarNoSearch />
      <main
        className='d-flex m-auto bg-white'
        style={{ maxWidth: "1000px", minHeight: "calc(100vh - 57px)" }}>
        <div className='w-100 position-relative fw-bold'>
          <div>
            <img
              src={require("../assets/alt.webp")}
              alt='cover'
              className='w-100'
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className='d-flex justify-content-end align-self-center '>
            <div
              className='position-absolute'
              style={{ top: "8rem", right: "calc(50% - 60px)" }}>
              <img
                src={require("../assets/alt.webp")}
                alt='profile'
                className='rounded-circle border border-4 border-white shadow'
                style={{ height: "120px", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* ----------Form ------------ */}
          <div
            className='container position-relative'
            style={{ maxWidth: "600px", paddingTop: "80px" }}>
            <div
              className='d-flex justify-content-center align-items-center position-absolute z-3'
              style={{ top: "20px", right: "5px" }}>
              <Link to='/settings' style={{ color: "gray" }}>
                <span
                  className='material-symbols-outlined'
                  style={{
                    width: "30px",
                    height: "30px",
                    paddingTop: "5px",
                    margin: "0 10px",
                    fontSize: "30px",
                  }}>
                  settings
                </span>
              </Link>
            </div>
            <div className='row g-2'>
              <div className='form-floating mb-3 col me-4'>
                <input
                  type='text'
                  className='form-control rounded-0'
                  id='firstName'
                  placeholder='name'
                  disabled
                />
                <label for='firstName' className='text-secondary'>
                  First Name
                </label>
              </div>
              <div className='form-floating mb-3 col'>
                <input
                  type='text'
                  className='form-control rounded-0'
                  id='lastName'
                  placeholder='name'
                  disabled
                />
                <label for='lastName' className='text-secondary'>
                  Last Name
                </label>
              </div>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control rounded-0'
                id='email'
                placeholder='example@mail.com'
                disabled
              />
              <label for='email' className='text-secondary'>
                Email
              </label>
            </div>
            <div className='row g-2'>
              <div className='form-floating mb-3 col me-4'>
                <input
                  type='text'
                  className='form-control rounded-0'
                  id='b-name'
                  placeholder='.'
                  disabled
                />
                <label htmlFor='b-name' className='text-secondary'>
                  Business Name
                </label>
              </div>
              <div className='form-floating mb-3 col'>
                <input
                  type='text'
                  className='form-control rounded-0'
                  id='role'
                  placeholder='role'
                  disabled
                />
                <label htmlFor='role' className='text-secondary'>
                  Role
                </label>
              </div>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control rounded-0'
                id='b-email'
                placeholder='example@mail.com'
                disabled
              />
              <label htmlFor='b-email' className='text-secondary'>
                Business Email
              </label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control rounded-0'
                id='industry'
                placeholder='example@mail.com'
                disabled
              />
              <label htmlFor='industry' className='text-secondary'>
                Industry
              </label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control rounded-0'
                id='website'
                placeholder='website'
                disabled
              />
              <label htmlFor='website' className='text-secondary'>
                Website
              </label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control rounded-0'
                id='country'
                placeholder='country'
                disabled
              />
              <label htmlFor='country' className='text-secondary'>
                Country
              </label>
            </div>
          </div>
          <div className="m-5">
            Reviews here
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
