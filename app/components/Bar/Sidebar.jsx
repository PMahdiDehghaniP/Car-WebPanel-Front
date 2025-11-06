'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu, setActiveItem } from '@/lib/store/slices/uiSlice';
import {
  MdOutlineHome,
  MdOutlineDirectionsCarFilled,
  MdOutlinePersonOutline,
  MdOutlineGarage,
  MdOutlineShare,
  MdEmojiEvents,
  MdOutlinePersonSearch
} from 'react-icons/md';
import Close from './close';
import ToggleThemeButton from '../Home/ToggleThemeButton';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { menuOpen, activeItem } = useSelector((state) => state.ui);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);
  const sidebarItems = isLoggedIn
    ? [
        'خانه',
        'خودروها',
        'داشبورد',
        'گاراژ من',
        'انجمن',
        'رویدادها',
        'درباره ما'
      ]
    : ['خانه', 'خودروها', 'ورود / ثبت نام', 'انجمن', 'رویدادها', 'درباره ما'];

  const handleClick = (label) => {
    dispatch(setActiveItem(label));
  };

  const getIcon = (label) => {
    switch (label) {
      case 'خانه':
        return <MdOutlineHome size={25} />;
      case 'خودروها':
        return <MdOutlineDirectionsCarFilled size={25} />;
      case 'ورود / ثبت نام':
      case 'داشبورد':
        return <MdOutlinePersonOutline size={25} />;
      case 'گاراژ من':
        return <MdOutlineGarage size={25} />;
      case 'انجمن':
        return <MdOutlineShare size={25} />;
      case 'رویدادها':
        return <MdEmojiEvents size={25} />;
      case 'درباره ما':
        return <MdOutlinePersonSearch size={22} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => dispatch(closeMenu())}
            className="absolute inset-0 bg-black"
          />
          <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className={`relative ml-auto w-[75%] h-full shadow-2xl flex flex-col text-lg font-medium overflow-y-auto
              ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}
            `}
            style={{ zIndex: 10000 }}
          >
            <div className="flex justify-between items-center p-4">
              <Close />
              <ToggleThemeButton />
            </div>

            {sidebarItems.map((label) => (
              <li
                key={label}
                onClick={() => handleClick(label)}
                className={`w-full flex flex-row-reverse items-center justify-start gap-3 px-6 py-4 border-b transition-all duration-200 cursor-pointer ${
                  activeItem === label
                    ? 'bg-[#2A78ED] text-white'
                    : 'hover:bg-[#2A78ED] hover:text-white border-gray-700'
                }`}
              >
                <span className="flex-1 text-right">{label}</span>
                {getIcon(label)}
              </li>
            ))}
          </motion.ul>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
