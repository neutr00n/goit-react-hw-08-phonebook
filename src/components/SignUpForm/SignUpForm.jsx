import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/authorization/operations';
import {
  Box,
  Title,
  Label,
  InputDescrip,
  Input,
  Button,
} from './SignUpForm.styled';

const initialValues = { name: '', email: '', password: '' };

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(registration(values));

    resetForm();
  };
  return (
    <section>
      <Box>
        <Title>SIGN UP</Title>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          <Form>
            <Label>
              <InputDescrip>User name</InputDescrip>
              <Input type="text" name="name" placeholder="User name" required />
            </Label>
            <Label>
              <InputDescrip>Email</InputDescrip>
              <Input type="tel" name="email" placeholder="Email" required />
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

            <Button type="submit">Register</Button>
          </Form>
        </Formik>
      </Box>
    </section>
  );
};
