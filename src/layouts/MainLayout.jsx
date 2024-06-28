import { Outlet } from 'react-router-dom';
import MainHeader from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <>
      <MainHeader />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
