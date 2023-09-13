import React from "react";
import { Link } from "react-router-dom";
import NavbarNoSearch from "./NavbarNoSearch";
const EditPost = () => {
  return (
    <>
      <NavbarNoSearch />
      <main className='w-100 bg-light'>
        <div className='m-auto' style={{ maxWidth: "1200px", minHeight: "100vh" }}>
          <div>
            <Link to='/' className='border-0 bg-transparent'>
              <span class='material-symbols-outlined fs-2 p-2 mt-3 bg-white rounded-circle'>
                arrow_back
              </span>
            </Link>
          </div>
          <div className='m-auto bg-white rounded-5' style={{ maxWidth: "500px" }}>
            <div className='px-5'>
              <div className='py-4 pb-3 fw-semibold'>Edit Post</div>
              <div>
                <div className='mb-3'>
                  <input
                    className='form-control placeholder-style p-2 ps-3 bg-light border-0 w-100 rounded-3 fw-lighter fs-5'
                    type='text'
                    placeholder='Add Hot Heading'
                  />
                </div>
                <div class='mb-3'>
                  <textarea
                    className='form-control placeholder-style pt-4 ps-3 bg-light rounded-3 border-0 fw-lighter fs-5'
                    id='exampleFormControlTextarea1'
                    placeholder='Add Content'
                    rows='6'
                  />
                </div>
                <select
                  class='form-select my-3 p-2 ps-3 bg-light border-0 w-100 rounded-3 fw-lighter fs-5'
                  style={{ color: "#78909C" }}>
                  <option selected>Choose Target Industries</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
                <select
                  class='form-select mb-2 p-2 ps-3 bg-light border-0 w-100 rounded-3 fw-lighter fs-5'
                  style={{ color: "#78909C" }}>
                  <option selected>Choose Tag</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
                <div className='w-100 text-end pt-1 pb-4'>
                  <button className='button-style'>Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditPost;
