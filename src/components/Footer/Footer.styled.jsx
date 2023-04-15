import styled from '@emotion/styled';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px 90px;
  background-color: #332f2f;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.7);
  border-radius: 8px 8px 0 0;
`;

export const FooterLink = styled.a`
  :nth-of-type(2) {
    margin-left: 20px;
  }
`;

export const LinkedIn = styled(BsLinkedin)`
  :hover,
  :focus {
    fill: white;
  }
`;

export const GitHub = styled(AiFillGithub)`
  :hover,
  :focus {
    fill: white;
  }
`;

export const FooterText = styled.p`
  margin-left: auto;
  color: #777777;
`;
