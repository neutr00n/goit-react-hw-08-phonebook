import { useSelector } from 'react-redux';
import { getIsLoggedin } from '../redux/selectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(getIsLoggedin);

  return isLoggedin ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
