import React from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '@/lib/store/slices/uiSlice';
const Close = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(closeMenu())}
      className="text-3xl hover:opacity-80 transition-opacity"
    >
      ✕
    </button>
  );
};

export default Close;
