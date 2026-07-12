import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import Grain from './Grain';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Grain />
      <Cursor />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
