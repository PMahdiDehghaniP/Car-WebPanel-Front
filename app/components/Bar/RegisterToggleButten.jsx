import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '@/lib/store/slices/authSlice';
import { FaRegUser } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const RegisterToggleButten = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);
  const router = useRouter();

  const handleClick = () => {
    if (isLoggedIn) {
      router.push('/garage');
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
        ${theme === 'dark' 
          ? 'bg-white text-black hover:bg-gray-200' 
          : 'bg-blue-600 text-white hover:bg-blue-700'}
        `}
    >
        {isLoggedIn ? 'گاراژ من' : 'ثبت نام'}
        <FaRegUser size={14} />
    </button>
  )
}

export default RegisterToggleButten