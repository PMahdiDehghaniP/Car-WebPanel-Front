'use client';
import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setActiveItem, toggleMenu } from '@/lib/store/slices/uiSlice';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FaRegUser } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import HambergerMenu from './HambergerMenu';
import ToggleThemeButton from '../Home/ToggleThemeButton';
import NavSearchButten from './NavSearchButten';
import RegisterToggleButten from './RegisterToggleButten';
import { useRouter  } from 'next/navigation';

const Navbar = () => {
  const dispatch = useDispatch();
  const { menuOpen, activeItem } = useSelector((state) => state.ui);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);
  const router = useRouter();

  const handleClick = (item) => {
    dispatch(setActiveItem(item.label));
    const validPaths = menuItems.map((i) => i.path);
    if (validPaths.includes(item.path)) {
      router.push(item.path);
    } else {
      router.push('/404'); 
    }
  };

  const menuItems = isLoggedIn
  ? [
      { label: 'خانه', path: '/' },
      { label: 'خودروها', path: '/cars' },
      { label: 'داشبورد', path: '/dashboard' },
      { label: 'انجمن', path: '/forum' },
      { label: 'رویدادها', path: '/events' },
      { label: 'درباره ما', path: '/about' },
      { label: 'ارتباط با ما', path: '/contact' },
    ]
  : [
      { label: 'خانه', path: '/' },
      { label: 'خودروها', path: '/cars' },
      { label: 'انجمن', path: '/forum' },
      { label: 'رویدادها', path: '/events' },
      { label: 'درباره ما', path: '/about' },
      { label: 'ارتباط با ما', path: '/contact' },
    ];

  return (
    <div className="transition-colors duration-300" dir="rtl">
      <nav className="relative flex justify-between items-center px-4 md:px-10 py-3 shadow-md transition-colors duration-300 overflow-hidden">
        <div className="hidden md:flex items-center gap-4 flex-row">
          <RegisterToggleButten/>
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`flex items-center gap-1 transition-all duration-200 ${
                activeItem === item.label ? 'text-[#2A78ED]' : 'hover:text-[#2A78ED]'
              }`}
            >
              {item.label}
              {item.label !== 'درباره ما' && item.label !== 'ارتباط با ما' && (
                <TiArrowSortedDown size={14} />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <HambergerMenu/>
          <div className="hidden md:flex items-center gap-6 flex-row">
            <registerToggleButten/>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <NavSearchButten/>
            </div>
            <div className="hidden md:flex">
              <ToggleThemeButton/>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar/>
    </div>
  );
};
export default Navbar;
