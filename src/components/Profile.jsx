import React from "react";
import NavbarNoSearch from "./NavbarNoSearch";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className='bg-light'>
      <NavbarNoSearch />
      <main
        className='d-flex m-auto bg-white'
        style={{ maxWidth: "1000px", minHeight: "calc(100vh - 57px)" }}>
        <div className='w-100 position-relative'>
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
            className='container position-relative fw-bold'
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
          {/* -------- Other Ratings ------- */}
          <p className='pb-2 pt-5 pt-sm-4 ps-4 fs-3'> Users Reviews:</p>
          <div className='p-3 m-4 bg-light rounded-3 mb-3'>
            {/* ------------- Desktop header --------------- */}
            <div className='review-header-deskop'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  width={40}
                  className='rounded-circle border-2 border border-white'
                />
                <p className='fs-5'>Majd Abed</p>
                <div>
                  <Rating
                    readonly
                    initialValue={3}
                    size={20}
                    fillColorArray={[
                      "#f17a45",
                      "#f19745",
                      "#f1a545",
                      "#f1b345",
                      "#f1d045",
                    ]}
                  />
                </div>
              </div>
              <p className='review-date'>31-12-2023</p>
            </div>
            {/* ------------- Mobile header --------------- */}
            <div className='review-header-mobile'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  width={40}
                  className='rounded-circle border-2 border border-white'
                />
                <p className='fs-5'>Majd Abed</p>
              </div>
              <div className='d-flex justify-content-between align-items-center pb-1'>
                <Rating
                  readonly
                  initialValue={3}
                  size={20}
                  fillColorArray={[
                    "#f17a45",
                    "#f19745",
                    "#f1a545",
                    "#f1b345",
                    "#f1d045",
                  ]}
                />
                <p className='review-date'>31-12-2023</p>
              </div>
            </div>
            <p className='px-sm-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
              consequuntur, dolores ducimus aperiam enim magni eum voluptates iste id
              deleniti temporibus nemo perspiciatis veniam expedita omnis vero.
              Vitae, libero officia autem ipsum sed commodi repellendus iure
              laboriosam cum. Non a ut labore at suscipit optio sed sequi qui
              consequatur, hic inventore odio ea illum asperiores? Sed voluptate odit
              commodi assumenda officiis aliquid expedita culpa, vitae, eveniet
              facere porro nisi possimus velit consequatur, sint eius laborum
              quibusdam obcaecati aperiam unde architecto nostrum pariatur. Quod ad
              aspernatur accusantium cumque in eveniet ipsam tempore non quisquam
              sint? Minus molestias nihil ut? Aliquam.
            </p>
          </div>
          <div className='p-3 m-4 bg-light rounded-3 mb-3'>
            {/* ------------- Desktop header --------------- */}
            <div className='review-header-deskop'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  width={40}
                  className='rounded-circle border-2 border border-white'
                />
                <p className='fs-5'>Majd Abed</p>
                <div>
                  <Rating
                    readonly
                    initialValue={3}
                    size={20}
                    fillColorArray={[
                      "#f17a45",
                      "#f19745",
                      "#f1a545",
                      "#f1b345",
                      "#f1d045",
                    ]}
                  />
                </div>
              </div>
              <p className='review-date'>31-12-2023</p>
            </div>
            {/* ------------- Mobile header --------------- */}
            <div className='review-header-mobile'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  width={40}
                  className='rounded-circle border-2 border border-white'
                />
                <p className='fs-5'>Majd Abed</p>
              </div>
              <div className='d-flex justify-content-between align-items-center pb-1'>
                <Rating
                  readonly
                  initialValue={3}
                  size={20}
                  fillColorArray={[
                    "#f17a45",
                    "#f19745",
                    "#f1a545",
                    "#f1b345",
                    "#f1d045",
                  ]}
                />
                <p className='review-date'>31-12-2023</p>
              </div>
            </div>
            <p className='px-sm-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
              consequuntur, dolores ducimus aperiam enim magni eum voluptates iste id
              deleniti temporibus nemo perspiciatis veniam expedita omnis vero.
              Vitae, libero officia autem ipsum sed commodi repellendus iure
              laboriosam cum. Non a ut labore at suscipit optio sed sequi qui
              consequatur, hic inventore odio ea illum asperiores? Sed voluptate odit
              commodi assumenda officiis aliquid expedita culpa, vitae, eveniet
              facere porro nisi possimus velit consequatur, sint eius laborum
              quibusdam obcaecati aperiam unde architecto nostrum pariatur. Quod ad
              aspernatur accusantium cumque in eveniet ipsam tempore non quisquam
              sint? Minus molestias nihil ut? Aliquam.
            </p>
          </div>
          <div className='p-3 m-4 bg-light rounded-3 mb-3'>
            {/* ------------- Desktop header --------------- */}
            <div className='review-header-deskop'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  width={40}
                  className='rounded-circle border-2 border border-white'
                />
                <p className='fs-5'>Majd Abed</p>
                <div>
                  <Rating
                    readonly
                    initialValue={3}
                    size={20}
                    fillColorArray={[
                      "#f17a45",
                      "#f19745",
                      "#f1a545",
                      "#f1b345",
                      "#f1d045",
                    ]}
                  />
                </div>
              </div>
              <p className='review-date'>31-12-2023</p>
            </div>
            {/* ------------- Mobile header --------------- */}
            <div className='review-header-mobile'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src={require("../assets/alt.webp")}
                  alt=''
                  width={40}
                  className='rounded-circle border-2 border border-white'
                />
                <p className='fs-5'>Majd Abed</p>
              </div>
              <div className='d-flex justify-content-between align-items-center pb-1'>
                <Rating
                  readonly
                  initialValue={3}
                  size={20}
                  fillColorArray={[
                    "#f17a45",
                    "#f19745",
                    "#f1a545",
                    "#f1b345",
                    "#f1d045",
                  ]}
                />
                <p className='review-date'>31-12-2023</p>
              </div>
            </div>
            <p className='px-sm-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
              consequuntur, dolores ducimus aperiam enim magni eum voluptates iste id
              deleniti temporibus nemo perspiciatis veniam expedita omnis vero.
              Vitae, libero officia autem ipsum sed commodi repellendus iure
              laboriosam cum. Non a ut labore at suscipit optio sed sequi qui
              consequatur, hic inventore odio ea illum asperiores? Sed voluptate odit
              commodi assumenda officiis aliquid expedita culpa, vitae, eveniet
              facere porro nisi possimus velit consequatur, sint eius laborum
              quibusdam obcaecati aperiam unde architecto nostrum pariatur. Quod ad
              aspernatur accusantium cumque in eveniet ipsam tempore non quisquam
              sint? Minus molestias nihil ut? Aliquam.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
