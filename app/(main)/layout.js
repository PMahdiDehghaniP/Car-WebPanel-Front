"use server"
import Navbar from '../components/Bar/Navbar';
import Footer from '../components/Home/Footer';

const  MainLayout=({ children }) =>{
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default MainLayout
