import { Title } from './SubTitle.styled';
import PropTypes from 'prop-types';

export const SubTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

SubTitle.propTypes = {
  children: PropTypes.node,
};
