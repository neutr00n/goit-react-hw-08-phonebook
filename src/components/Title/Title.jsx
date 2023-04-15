import { MainTitle } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return <MainTitle>{children}</MainTitle>;
};

Title.propTypes = {
  children: PropTypes.node,
};
