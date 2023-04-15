import styled from '@emotion/styled';
import { Field } from 'formik';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;

  width: 380px;

  background-color: #e5eaeb;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.b`
  display: block;

  margin-bottom: 20px;

  font-size: 26px;
  line-height: 1.3;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;

  :nth-of-type(2) {
    margin-bottom: 25px;
  }
`;

export const InputDescrip = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 1.2;

  color: #757575;
`;

export const Input = styled(Field)`
  padding: 5px 10px;

  width: 300px;
  height: 32px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 15px;
  width: 120px;
  height: 38px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  background: #f5f4fa;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
