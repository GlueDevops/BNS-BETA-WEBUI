import React, { useState } from "react";
import Navbar from "./Navbar";
import { Rating } from "react-simple-star-rating";
const UserProfile = () => {
  const [rating, setRating] = useState(2);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className='bg-light'>
      <Navbar />
      <div
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
            <button className='main-btn-small'>Start Conversations</button>
          </div>
          {/* ------------ Rating ----------- */}
          <form className='rating-container'>
            <p className='pb-2 pt-4 fs-3'> Rate this User:</p>
            <textarea
              type='text'
              className='input-field pt-2 ps-2'
              placeholder='Write what you think of this user...'
            />
            <div className='w-100 d-flex justify-content-between align-items-center position-relative'>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                allowHover={false}
                disableFillHover={true}
                transition
                showTooltip
                initialValue={3}
                fillColorArray={[
                  "#f17a45",
                  "#f19745",
                  "#f1a545",
                  "#f1b345",
                  "#f1d045",
                ]}
                tooltipArray={["Terrible", "Bad", "Average", "Great", "Prefect"]}
                tooltipClassName={"tooltip"}
              />
              <button className='rating-submit'>Submit</button>
            </div>
          </form>
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
      </div>
    </div>
  );
};

export default UserProfile;
