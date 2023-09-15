import React from "react";
import { useRef } from "react";

const Menus = () => {
  let scrll = useRef();
  const slide = (s) => {
    scrll.current.scrollLeft += s;
  };

  return (
    <div className='menus-style'>
      <button className='menus-arrows' onClick={() => slide(-200)}>
        <span className='material-symbols-outlined fs-2 pt-1'>arrow_back_ios</span>
      </button>
      <nav className='nav'>
        <ul className='nav-items' ref={scrll}>
          <li className='nav-item-style active'>All</li>
          <li className='nav-item-style'>menu</li>
          <li className='nav-item-style'>menu</li>
          <li className='nav-item-style'>menu</li>
          <li className='nav-item-style'>menu</li>
          <li className='nav-item-style'>menu</li>
          <li className='nav-item-style'>menu</li>

        </ul>
      </nav>
      <button className='menus-arrows' onClick={() => slide(200)}>
        <span className='material-symbols-outlined fs-2 pt-1'>
          arrow_forward_ios
        </span>
      </button>
    </div>
  );
};

export default Menus;
