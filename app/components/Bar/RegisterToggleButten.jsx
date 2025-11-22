'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { FaRegUser } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const RegisterToggleButton = () => {
  const { data: session } = useSession();
  const { theme } = useSelector((state) => state.theme);
  const router = useRouter();

  const handleClick = () => {
    if (session) {
      router.push('/dashboard/garage');
    } else {
      router.push('/signup');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-7 py-2 rounded-full font-semibold 
        transition-all duration-200 shadow-md flex items-center gap-2
        ${
          theme === 'dark'
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }
      `}
    >
      {session ? 'گاراژ من' : 'ثبت نام'}
      <FaRegUser size={14} />
    </button>
  );
};

export default RegisterToggleButton;
