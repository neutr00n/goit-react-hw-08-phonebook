import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { LogIn } from 'redux/authorization/operations';
import {
  Box,
  Title,
  Label,
  InputDescrip,
  Input,
  Button,
} from './LogInForm.styled';

const initialValues = { email: '', password: '' };

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(LogIn(values));
    resetForm();
  };
  return (
    <section>
      <Box>
        <Title>Authorization</Title>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          <Form>
            <Label>
              <InputDescrip>Email</InputDescrip>
              <Input type="text" name="email" placeholder="Email" required />
            </Label>
            <Label>
              <InputDescrip>Password</InputDescrip>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Label>

            <Button type="submit">Log In</Button>
          </Form>
        </Formik>
      </Box>
    </section>
  );
};
