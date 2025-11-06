import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '@/lib/store/slices/uiSlice';
import { TiThMenu } from 'react-icons/ti';
const HambergerMenu = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="p-1 shadow-md md:hidden flex items-center justify-center"
      onClick={() => dispatch(toggleMenu())}
      aria-label="toggle menu"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(153, 153, 153, 0.1) 100%)'
      }}
    >
      <TiThMenu size={19} className="text-black" />
    </button>
  );
};

export default HambergerMenu;
