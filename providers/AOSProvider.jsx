'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 200,
      throttleDelay: 99,
      debounceDelay: 50
    });
  }, []);
  return <>{children}</>;
};
export default AOSProvider;
