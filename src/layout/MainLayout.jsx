import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#000000] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
