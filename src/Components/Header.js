import styled from 'styled-components';
import breakpoints from '../Styles/breakpoints';

//Styles
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const HeadingBig = styled.h1`
  font-size: 3rem;
  color: #f0493c;

  @media only screen and ${breakpoints.device.sm} {
    font-size: 2rem;
  }
  @media only screen and ${breakpoints.device.xs} {
    font-size: 1.8rem;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeadingBig>Canadian Breweries</HeadingBig>
      </StyledHeader>
    </>
  );
};

export default Header;
