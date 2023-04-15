import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 10px 50px;
  background-color: #332f2f;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.7);
  border-radius: 0 0 8px 8px;
`;

export const NavigLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  font-weight: 600;
  color: #fff;

  &.active {
    color: #0d17a7;
    background-color: #777777;
    box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;
    border-radius: 8px;
  }

  :not(:first-of-type) {
    margin-left: 10px;
  }
`;
