import { Wrapper } from './ContactsWrap.styled';
import PropTypes from 'prop-types';

export const ContactsWrap = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ContactsWrap.propTypes = {
  children: PropTypes.node,
};
