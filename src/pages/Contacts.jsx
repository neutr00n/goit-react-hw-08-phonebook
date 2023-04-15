import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NoContacts } from 'components/NoContacts/NoContacts';
import { DisplayedContacts } from 'helpers/displayedContacts';
import { useFetchAllContactsQuery } from 'redux/phoneBook/phoneBookApi';
import { Loader } from 'components/Loader/Loader';
import { ContactsWrap } from 'components/ContactsWrap/ContactsWrap';
import { Title } from 'components/Title/Title';
import { SubTitle } from 'components/SubTitle/SubTitle';

const Contacts = () => {
  const { error, isError, isLoading, refetch } = useFetchAllContactsQuery();
  const displayedContacts = DisplayedContacts();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isError) {
    toast.error(error.data);
  }

  return (
    <ContactsWrap>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts:</SubTitle>
      <Filter />
      {isLoading && <Loader size={60} stroke={2} />}
      {!isLoading ? (
        displayedContacts.length ? (
          <ContactList />
        ) : (
          <NoContacts />
        )
      ) : null}

      {/* <ToastContainer theme="colored" autoClose={2000} /> */}
    </ContactsWrap>
  );
};

export default Contacts;
