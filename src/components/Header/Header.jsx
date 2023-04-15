import { Head, NavigLink } from './Header.styled';
import { Logout } from '../LogOut/LogOut';
import { useSelector } from 'react-redux';
import { getIsLoggedin } from 'redux/selectors';

export const Header = () => {
  const isLoggedin = useSelector(getIsLoggedin);

  return (
    <Head>
      <nav>
        <NavigLink to="/">Home</NavigLink>

        {isLoggedin && <NavigLink to="contacts">Contacts</NavigLink>}
      </nav>

      {!isLoggedin ? (
        <div>
          <NavigLink to="register">Sign up</NavigLink>
          <NavigLink to="login">Log In</NavigLink>
        </div>
      ) : (
        <Logout />
      )}
    </Head>
  );
};
