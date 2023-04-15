import { useSelector } from 'react-redux';
import { getIsLoggedin, getIsRefreshing } from 'redux/selectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(getIsLoggedin);
  const isRefreshing = useSelector(getIsRefreshing);

  const shouldRedirect = !isLoggedin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
