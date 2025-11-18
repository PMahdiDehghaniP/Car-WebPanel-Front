'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveItem } from '@/lib/store/slices/uiSlice';
import { TiArrowSortedDown } from 'react-icons/ti';
import Sidebar from './Sidebar';
import HambergerMenu from './HambergerMenu';
import ToggleThemeButton from '../Home/ToggleThemeButton';
import NavSearchButten from './NavSearchButten';
import RegisterToggleButten from './RegisterToggleButten';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '@mui/material';

const Navbar = () => {
  const dispatch = useDispatch();
  const { activeItem } = useSelector((state) => state.ui);
  const { data: session, status } = useSession();
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

  const menuItems = session
    ? [
        { label: 'خانه', path: '/' },
        { label: 'خودروها', path: '/cars' },
        { label: 'داشبورد', path: '/dashboard' },
        { label: 'انجمن', path: '/forum' },
        { label: 'رویدادها', path: '/events' },
        { label: 'درباره ما', path: '/about' },
        { label: 'ارتباط با ما', path: '/contact' }
      ]
    : [
        { label: 'خانه', path: '/' },
        { label: 'خودروها', path: '/cars' },
        { label: 'انجمن', path: '/forum' },
        { label: 'رویدادها', path: '/events' },
        { label: 'درباره ما', path: '/about' },
        { label: 'ارتباط با ما', path: '/contact' }
      ];

  return (
    <div className="transition-colors duration-300" dir="rtl">
      <nav className="relative flex justify-between items-center px-4 md:px-10 py-3 shadow-md transition-colors duration-300 overflow-hidden">
        <div className="hidden md:flex items-center gap-4 flex-row">
          {status === 'loading' ? (
            <div className="w-full h-10 bg-gray-300 rounded animate-pulse"></div>
          ) : (
            <RegisterToggleButten />
          )}
          {menuItems.map((item) =>
            status === 'loading' ? (
              <div
                key={item.label}
                className="w-20 h-10 bg-gray-300 rounded animate-pulse"
              ></div>
            ) : (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className={`flex items-center gap-1 transition-all duration-200 ${
                  activeItem === item.label
                    ? 'text-[#2A78ED]'
                    : 'hover:text-[#2A78ED]'
                }`}
              >
                {item.label}
                {item.label !== 'درباره ما' &&
                  item.label !== 'ارتباط با ما' && (
                    <TiArrowSortedDown size={14} />
                  )}
              </button>
            )
          )}
          {status === 'authenticated' && (
            <Button
              onClick={() =>
                signOut({ redirect: false }).then(() => router.push('/login'))
              }
            >
              خروج
            </Button>
          )}
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <HambergerMenu />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <NavSearchButten />
            </div>
            <div className="hidden md:flex">
              <ToggleThemeButton />
            </div>
          </div>
        </div>
      </nav>
      <Sidebar />
    </div>
  );
};
export default Navbar;
