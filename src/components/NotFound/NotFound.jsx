import { Title } from './NotFound.styled';
import PropTypes from 'prop-types';

export const NotFound = ({ children }) => {
  return <Title>{children}</Title>;
};

NotFound.propTypes = {
  children: PropTypes.node,
};
