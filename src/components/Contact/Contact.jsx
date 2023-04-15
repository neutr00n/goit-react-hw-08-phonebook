import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/phoneBook/phoneBookApi';
import { Loader } from '../Loader/Loader';
import { IoIosContact } from 'react-icons/io';
import { toast } from 'react-toastify';
import {
  ContactCount,
  ContactName,
  ContactNumber,
  ContactButton,
} from './Contact.styled';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = ({ name, number, id, index }) => {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();

  if (isSuccess) {
    toast.success('Contact successfully removed');
  }
  if (isError) {
    toast.error('Something went wrong');
  }

  return (
    <>
      <ContactCount>{index + 1}.</ContactCount>
      <IoIosContact />
      <ContactName>{name}:</ContactName>
      <ContactNumber href={`tel: ${number}`}>{number}</ContactNumber>
      <ContactButton
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? <Loader size={10} stroke={7} /> : 'X'}
      </ContactButton>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
