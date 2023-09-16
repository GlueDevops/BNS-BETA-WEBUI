import React from "react";
import NavbarNoSearch from "./NavbarNoSearch";
const AccountSettings = () => {
  return (
    <>
      <NavbarNoSearch />
      <div className='d-flex' style={{ backgroundColor: "#EEEEEE" }}>
        <div className='w-100'>
          <div style={{ maxWidth: "1000px", margin: "auto" }}>
            <div className='d-flex align-items-center fs-4 py-5'>
              <span class='material-symbols-outlined fs-2 text-secondary'>
                settings
              </span>
              Account Settings
            </div>
            {/* -------------- 2 Step Authentication ----------- */}
            <div
              className='d-flex justify-content-between bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  shield_lock
                </span>
                <p className='p-0 m-0'>2 STEP AUTHENTICATION</p>
              </div>
              <div class='d-flex align-items-center form-switch fs-5'>
                <p className='pt-1 m-0 d-none d-sm-block'>OFF</p>
                <input
                  className='form-check-input mx-2'
                  type='checkbox'
                  role='switch'
                  id='flexSwitchCheckDefault'
                />
              </div>
            </div>
            {/* ----------- Change Name ----------*/}
            <div
              className='bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold pb-3'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  person
                </span>
                <p className='p-0 m-0'>CHANGE NAME</p>
              </div>
              <div className='d-sm-flex justify-content-start w-100 gap-3 fw-light fs-5'>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control rounded-0 mb-2 mb-sm-0'
                    id='firstName'
                    placeholder='First Name'
                    style={{ height: "25px" }}
                    // disabled
                  />
                  <label
                    for='firstName'
                    className='text-secondary fs-6'
                    // style={{ padding: "5px 15px" }}
                  >
                    First Name
                  </label>
                </div>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control rounded-0 mb-2 mb-sm-0'
                    id='lastName'
                    placeholder='Last Name'
                    style={{ height: "25px" }}
                    // disabled
                  />
                  <label
                    for='lastName'
                    className='text-secondary fs-6'
                    // style={{ padding: "5px 15px" }}
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className='w-100 d-flex justify-content-end mt-3'>
                <button className='main-btn-small'>Change Name</button>
              </div>
            </div>
            {/* ----------- Change Role ----------*/}
            <div
              className='bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold pb-3'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  person
                </span>
                <p className='p-0 m-0'>CHANGE ROLE</p>
              </div>
              <div
                className='d-flex justify-content-between fw-light'>
                <div className='form-floating flex-grow-1'>
                  <select
                    className='form-select rounded-0 py-0'
                    style={{ color: "#78909C" }}>
                    <option selected>Choose Tag</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
              </div>
              <div className='w-100 d-flex justify-content-end mt-3'>
                <button className='main-btn-small'>Change Role</button>
              </div>
            </div>
            {/* ----------- Change Password ----------*/}
            <div
              className='bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold pb-3'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  key
                </span>
                <p className='p-0 m-0'>CHANGE PASSWORD</p>
              </div>
              <div className='d-sm-flex justify-content-start w-100 gap-3 fw-light fs-5'>
                <div className='form-floating'>
                  <input
                    type='password'
                    className='form-control rounded-0 mb-2 mb-sm-0'
                    id='currentPassword'
                    placeholder='Current Password'
                    style={{ height: "25px" }}
                    // disabled
                  />
                  <label
                    for='currentPassword'
                    className='text-secondary fs-6'
                    // style={{ padding: "5px 15px" }}
                  >
                    Current Password
                  </label>
                </div>
                <div className='form-floating'>
                  <input
                    type='password'
                    className='form-control rounded-0 mb-2 mb-sm-0'
                    id='newPassword'
                    placeholder='New Password'
                    style={{ height: "25px" }}
                    // disabled
                  />
                  <label
                    for='newPassword'
                    className='text-secondary fs-6'
                    // style={{ padding: "5px 15px" }}
                  >
                    New Password
                  </label>
                </div>
                <div className='form-floating'>
                  <input
                    type='password'
                    className='form-control rounded-0 '
                    id='confirmNewPassword'
                    placeholder='Confirm New Password'
                    style={{ height: "25px" }}
                    // disabled
                  />
                  <label
                    for='confirmNewPassword'
                    className='text-secondary fs-6'
                    // style={{ padding: "5px 15px" }}
                  >
                    Confirm New Password
                  </label>
                </div>
              </div>
              <div className='w-100 d-flex justify-content-end mt-3'>
                <button className='main-btn-small'>Change Password</button>
              </div>
            </div>
            {/* ----------- emails ---------- */}
            <div
              className='d-flex flex-column bg-white'
              style={{ padding: "25px 30px 0", marginBottom: "30px" }}>
              <div className='fw-semibold mb-5'>
                <div className='d-flex align-items-center'>
                  <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                    mark_email_read
                  </span>
                  <p className='p-0 m-0 '>PRIMARY EMAIL</p>
                </div>
                <div>
                  <p className='p-0 m-0 fw-lighter ps-5 ms-2'>youremail@email.com</p>
                </div>
              </div>
              <div className='fw-semibold mb-5'>
                <div className='d-flex align-items-center'>
                  <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                    email
                  </span>
                  <p className='p-0 m-0 '>SECONDARY EMAIL</p>
                </div>
                <div className='d-sm-flex justify-content-between'>
                  <p className='p-0 m-0 fw-lighter ps-5 ms-2 pb-4 pb-sm-0'>
                    youremail@email.com
                  </p>

                  {/* -------------- EMAIL buttons --------- */}

                  <div className='d-sm-flex text-start fw-lighter fs-6 pe-4 email-buttons-style'>
                    <div className='d-flex align-items-center'>
                      <span class='material-symbols-outlined fs-4 text-secondary'>
                        change_circle
                      </span>
                      CHANGE EMAIL
                    </div>
                    <div className='d-flex align-items-center px-sm-4'>
                      <span class='material-symbols-outlined fs-4 text-secondary'>
                        delete
                      </span>
                      DELETE
                    </div>
                    <div className='d-flex align-items-center'>
                      <span class='material-symbols-outlined fs-4 text-secondary'>
                        mark_email_read
                      </span>
                      MAKE IT PRIMARY
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------- Change Phone Numbers ---------- */}
            <div
              className='d-flex flex-column bg-white'
              style={{ padding: "25px 30px 0", marginBottom: "30px" }}>
              <div className='fw-semibold mb-5'>
                <div className='d-flex align-items-center'>
                  <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                    call
                  </span>
                  <p className='p-0 m-0 '>REGISTERED PHONE NUMBER</p>
                </div>
                <div className='d-sm-flex justify-content-between'>
                  <p className='p-0 m-0 fw-lighter ps-5 ms-2 pb-4 pb-sm-0'>
                    +915656151651
                  </p>

                  {/* -------------- Phone buttons --------- */}

                  <div className='d-sm-flex text-start fw-lighter fs-6 pe-4 email-buttons-style'>
                    <div className='d-flex align-items-center'>
                      <span class='material-symbols-outlined fs-4 text-secondary'>
                        change_circle
                      </span>
                      CHANGE NUMBER
                    </div>
                    <div className='d-flex align-items-center px-sm-4'>
                      <span class='material-symbols-outlined fs-4 text-secondary'>
                        delete
                      </span>
                      DELETE
                    </div>
                  </div>
                </div>
              </div>
              <div className='fw-semibold mb-5'>
                <div className='d-flex align-items-center'>
                  <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                    fax
                  </span>
                  <p className='p-0 m-0'>WORK PHONE</p>
                </div>
                <div className='d-sm-flex justify-content-between'>
                  <p className='p-0 m-0 fw-lighter ps-5 ms-2 pb-4 pb-sm-0'>
                    +915656151651
                  </p>

                  {/* -------------- Phone buttons --------- */}

                  <div className='d-sm-flex text-start fw-lighter fs-6 pe-4 email-buttons-style'>
                    <div className='d-flex align-items-center'>
                      <span class='material-symbols-outlined fs-4 text-secondary'>
                        change_circle
                      </span>
                      CHANGE NUMBER
                    </div>
                    <div className='d-flex align-items-center px-sm-4'>
                      <span class='material-symbols-outlined fs-4 text-secondary'>
                        delete
                      </span>
                      DELETE
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ----- change Business name --------- */}
            <div
              className='bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  corporate_fare
                </span>
                <p className='p-0 m-0'>CHANGE BUSINESS NAME</p>
              </div>
              <div className='w-100'>
                <div className='m-auto'>
                  <p className='ps-3 pt-3'>
                    Please contanct support to change Business name.
                  </p>
                  <div className='w-100 text-end'>
                    <button className='main-btn-small'>Contanct Support</button>
                  </div>
                </div>
              </div>
            </div>
            {/* ----- change Business name --------- */}
            <div
              className='bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  construction
                </span>
                <p className='p-0 m-0'>CHANGE INDUSTRY</p>
              </div>
              <div className='w-100'>
                <div className='m-auto'>
                  {/* ------------Industries------------- */}
                  {/* <div
                    className='btn-group aud-grid check-style'
                    role='group'
                    aria-label='Basic checkbox toggle button group'>
                    <input
                      type='checkbox'
                      className='btn-check'
                      id='industrycheck1'
                      autocomplete='off'
                    />
                    <label
                      className='btn rounded-5 py-2 d-flex justify-content-center align-items-center'
                      for='industrycheck1'>
                      Sample Industry
                    </label>
                    <input
                      type='checkbox'
                      className='btn-check'
                      id='industrycheck2'
                      autocomplete='off'
                    />
                    <label
                      className='btn rounded-5 d-flex justify-content-center align-items-center'
                      for='industrycheck2'>
                      Sample Industry
                    </label>
                    <input
                      type='checkbox'
                      className='btn-check'
                      id='industrycheck3'
                      autocomplete='off'
                    />
                    <label
                      className='btn rounded-5 d-flex justify-content-center align-items-center'
                      for='industrycheck3'>
                      Sample Industry
                    </label>
                    <input
                      type='checkbox'
                      className='btn-check'
                      id='industrycheck4'
                      autocomplete='off'
                    />
                    <label
                      className='btn rounded-5 d-flex justify-content-center align-items-center'
                      for='industrycheck4'>
                      Sample Industry
                    </label>
                    <input
                      type='checkbox'
                      className='btn-check'
                      id='industrycheck5'
                      autocomplete='off'
                    />
                    <label
                      className='btn rounded-5 d-flex justify-content-center align-items-center'
                      for='industrycheck5'>
                      Sample Industry
                    </label>
                  </div> */}
                  <div className='aud-grid'>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault1'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault1'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault2'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault2'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault3'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault3'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault4'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault4'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault5'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault5'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault6'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault6'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault7'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault7'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault8'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault8'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault9'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault9'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault10'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault10'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault11'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault11'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault12'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault12'>
                        Sample Industry
                      </label>
                    </div>
                    <div class='check-style'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        className='btn-check'
                        id='flexRadioDefault13'
                        autocomplete='off'
                      />
                      <label
                        className='btn rounded-5 d-flex justify-content-center align-items-center'
                        for='flexRadioDefault13'>
                        Sample Industry
                      </label>
                    </div>
                  </div>
                  <div className='w-100 text-end'>
                    <button className='main-btn-small'>Change Industry</button>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------- SUB plan --------- */}
            <div
              className='bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  contract
                </span>
                <p className='p-0 m-0'>SUBSCRIPTION PLAN</p>
              </div>
              <div className='m-auto'>
                  <p className='ps-3 pt-3'>
                    Current subscription plan : <span className="text-secondary fw-bold">SILVER</span>
                  </p>
                <div className='w-100 text-end'>
                  <button className='main-btn-small bg-success border-0 me-2'>
                    Download Invoice
                  </button>
                  <button className='main-btn-small border-0'>
                    Change Plan
                  </button>
                </div>
              </div>
            </div>
            {/* ----------- inactive account --------- */}
            <div
              className='bg-white'
              style={{ padding: "25px 30px", marginBottom: "30px" }}>
              <div className='d-flex align-items-center fw-semibold'>
                <span class='material-symbols-outlined fs-1 text-secondary pe-3'>
                  person_remove
                </span>
                <p className='p-0 m-0'>INACTIVE ACCOUNT</p>
              </div>
              <div className='m-auto'>
                  <p className='ps-3 pt-3'>
                    You can re-activate your account by Loggin in.
                  </p>
                <div className='w-100 text-end'>
                  <button className='main-btn-small bg-danger border-0'>
                    Inactive Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
