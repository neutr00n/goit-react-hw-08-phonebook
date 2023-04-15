import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Box } from './Layout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer theme="colored" autoClose={2000} />
    </Box>
  );
};
