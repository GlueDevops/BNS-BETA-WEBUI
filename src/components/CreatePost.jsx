import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import NavbarNoSearch from "./NavbarNoSearch";
const CreatePost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <NavbarNoSearch />
      <main className='w-100 bg-light'>
        <div
          className='m-auto px-2 pb-4'
          style={{ maxWidth: "1200px", minHeight: "100vh" }}>
          <div>
            <Link to='/' className='border-0 bg-transparent'>
              <span className='material-symbols-outlined fs-2 p-2 mt-3 bg-white rounded-circle mb-3 mb-sm-0'>
                arrow_back
              </span>
            </Link>
          </div>
          <div className='m-auto bg-white rounded-5' style={{ maxWidth: "500px" }}>
            <div className='px-5'>
              <div className='py-4 pb-3 fw-semibold'>Create a Post</div>
              <div>
                {/* -------- Topic ----------- */}
                <div className='mb-3'>
                  <input
                    className='form-control placeholder-style p-2 ps-3 bg-light border-0 w-100 rounded-3 fw-light fs-5'
                    type='text'
                    placeholder='Add Topic'
                  />
                </div>
                {/* -------- Radio Selector ----------- */}
                <div className='form-check form-check-inline mb-2'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='inlineRadioOptions'
                    id='product'
                    value='product'
                    onChange={handleRadioChange}
                  />
                  <label className='form-check-label' htmlFor='product'>
                    Product
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='inlineRadioOptions'
                    id='service'
                    value='service'
                    onChange={handleRadioChange}
                  />
                  <label className='form-check-label' htmlFor='service'>
                    Service
                  </label>
                </div>
                {/* -------- Image input ----------- */}

                <div className='mb-3'>
                  <input
                    className='form-control'
                    type='file'
                    accept='image/*'
                    id='formFile'
                  />
                  <label for='formFile' className='form-label post-add-img-label'>
                    <span>*</span>Image dimentions 250×250, Max file size 25kb
                  </label>
                </div>
                {/* --------- Cost input ---------- */}
                <div className='mb-3'>
                  <input
                    className='form-control placeholder-style p-2 ps-3 bg-light border-0 w-100 rounded-3 fw-light fs-5'
                    type='text'
                    placeholder={`${
                      selectedValue === "product" ? "Price in USD " : "Cost in USD"
                    }`}
                  />
                </div>
                {/* -------- Content Input ----------- */}

                <div className='mb-3'>
                  <textarea
                    className='form-control placeholder-style pt-4 ps-3 bg-light rounded-3 border-0 fw-light fs-5'
                    id='exampleFormControlTextarea1'
                    placeholder='Add Content'
                    rows='6'
                  />
                </div>
                {/* -------- choose Industries -------- */}
                <p>Choose Targeted Industries:</p>
                <div
                  className='btn-group industries-grid check-style mt-2'
                  role='group'
                  aria-label='Basic checkbox toggle button group'>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck1'
                    autocomplete='off'
                  />
                  <label for='industrycheck1'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck2'
                    autocomplete='off'
                  />
                  <label for='industrycheck2'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck3'
                    autocomplete='off'
                  />
                  <label for='industrycheck3'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck4'
                    autocomplete='off'
                  />
                  <label for='industrycheck4'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck5'
                    autocomplete='off'
                  />
                  <label for='industrycheck5'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck6'
                    autocomplete='off'
                  />
                  <label for='industrycheck6'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck7'
                    autocomplete='off'
                  />
                  <label for='industrycheck7'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck8'
                    autocomplete='off'
                  />
                  <label for='industrycheck8'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck9'
                    autocomplete='off'
                  />
                  <label for='industrycheck9'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck10'
                    autocomplete='off'
                  />
                  <label for='industrycheck10'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck11'
                    autocomplete='off'
                  />
                  <label for='industrycheck11'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck12'
                    autocomplete='off'
                  />
                  <label for='industrycheck12'>Sample Industry</label>
                  <input
                    type='checkbox'
                    className='btn-check'
                    id='industrycheck13'
                    autocomplete='off'
                  />
                  <label for='industrycheck13'>Sample Industry</label>
                </div>
                {/* ---------- Choose Tag ----------- */}
                <select
                  className='form-select my-4 p-2 ps-3 bg-light border-0 w-100 rounded-3 fw-light fs-5'
                  style={{ color: "#78909C" }}>
                  <option selected>Choose Tag</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
                {/* ------- Date Picker --------- */}
                <p>Date of Expire:</p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat='dd MMM yyyy'
                  minDate={new Date()}
                  className='w-100 mb-4 mt-2 p-2 ps-3 bg-light border-0 rounded-3 fw-light fs-5'
                />
                {/* -------- Contact Hours ------ */}
                <p>Available Hours:</p>
                <div className='d-flex align-items-center my-3 gap-1 gap-sm-3'>
                  <span>From:</span>
                  <DatePicker
                    selected={startTime}
                    onChange={(date) => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption='Time'
                    dateFormat='h:mm aa'
                    className='p-2 ps-3 bg-light border-0 rounded-3 fw-light fs-5 w-100 inline'
                  />
                  <span>To:</span>
                  <DatePicker
                    selected={endTime}
                    onChange={(date) => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption='Time'
                    dateFormat='h:mm aa'
                    className='p-2 ps-3 bg-light border-0 rounded-3 fw-light fs-5 w-100 inline'
                  />
                </div>
                {/* ------- post button --------- */}
                <div className='w-100 text-end pt-1 pb-4'>
                  <button
                    className='button-style'
                    onClick={() => console.log(selectedValue)}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePost;
