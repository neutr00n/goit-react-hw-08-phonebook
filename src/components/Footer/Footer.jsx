import { IconContext } from 'react-icons';
import {
  FooterStyle,
  FooterLink,
  LinkedIn,
  GitHub,
  FooterText,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterLink
        href="https://www.linkedin.com/in/pavlosavchenko/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconContext.Provider
          value={{
            color: '#777777',
            size: '25px',
            style: { verticalAlign: 'middle' },
          }}
        >
          <LinkedIn />
        </IconContext.Provider>
        ;
      </FooterLink>
      <FooterLink
        href="https://github.com/neutr00n"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconContext.Provider
          value={{
            color: '#777777',
            size: '25px',
            style: { verticalAlign: 'middle' },
          }}
        >
          <GitHub />
        </IconContext.Provider>
      </FooterLink>
      <FooterText> &copy; 2023</FooterText>
    </FooterStyle>
  );
};
