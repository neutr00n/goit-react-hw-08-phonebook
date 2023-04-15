import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Greeting = styled.p`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.06em;

  color: #fff;
`;

export const Button = styled.button`
  margin-left: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  font-weight: 600;
  color: #fff;
  background-color: #777777;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    color: #0d17a7;
    box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;
  }
`;
