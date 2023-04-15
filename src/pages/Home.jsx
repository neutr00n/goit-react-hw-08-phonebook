import { Title } from 'components/Title/Title';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useSelector } from 'react-redux';
import { getIsLoggedin, getName } from 'redux/selectors';

const Home = () => {
  const isLoggedin = useSelector(getIsLoggedin);
  const name = useSelector(getName);

  return (
    <div>
      <Title>Welcome to the PhoneBook app!</Title>
      <SubTitle>{isLoggedin ? name : 'Please log in to continue.'}</SubTitle>
    </div>
  );
};

export default Home;
