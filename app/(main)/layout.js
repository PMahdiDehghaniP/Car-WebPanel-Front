import Navbar from '../components/Bar/Navbar';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
