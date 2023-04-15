import { useDispatch, useSelector } from 'react-redux';
import { getName } from 'redux/selectors';
import { LogOut } from 'redux/authorization/operations';
import { Box, Greeting, Button } from './Logout.styled';

export const Logout = () => {
  const login = useSelector(getName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(LogOut());
  };

  return (
    <Box>
      <Greeting>Welcome,{login}!</Greeting>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Box>
  );
};
