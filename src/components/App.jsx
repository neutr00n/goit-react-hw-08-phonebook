import { lazy, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/authorization/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { getError, getIsRefreshing } from '../redux/selectors';
import { NotFound } from '../components/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home'));
const SignUp = lazy(() => import('../pages/SignUp'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isRefreshing = useSelector(getIsRefreshing);

  if (error) {
    toast.error(error);
  }

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute component={SignUp} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LogIn} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
          <Route path="*" element={<NotFound>Page not found</NotFound>} />
        </Route>
      </Routes>
    )
  );
};
