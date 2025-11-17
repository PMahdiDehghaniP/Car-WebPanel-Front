import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '@/lib/store/slices/uiSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const NavSearchButten = () => {
  const dispatch = useDispatch();
  const { isSearchOpen } = useSelector((state) => state.ui);

  return (
    <div className="relative flex items-center justify-end overflow-hidden md:hidden">
      <AnimatePresence initial={false}>
        {isSearchOpen ? (
          <motion.div
            key="searchbox"
            initial={{ width: 0, opacity: 0, x: -50 }}
            animate={{ width: 247, opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex items-center justify-between bg-[#2A78ED] rounded-full px-1 py-1 shadow-md"
            style={{ direction: 'ltr', height: '33px' }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A78ED]">
              <button
                onClick={() => dispatch(toggleSearch())}
                className="text-white"
              >
                ×
              </button>
            </div>
            <input
              type="text"
              placeholder="... جستجو"
              autoFocus
              className="w-[180px] mx-1 bg-[#6882FF] h-[22px] text-white text-right text-sm outline-none placeholder-white/70 rounded-l-full"
            />
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A78ED]">
              <FaSearch className="text-white" size={18} />
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="searchicon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className="p-1.5 bg-[#2A78ED] rounded-full text-white shadow-md"
            onClick={() => dispatch(toggleSearch())}
          >
            <FaSearch className="text-white" size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavSearchButten;
