import styled from 'styled-components';
import breakpoints from '../Styles/breakpoints';

//Styles
const Card = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 0.4rem;
  padding: 0.6rem;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.4rem #f0f0f0;
  border-radius: 3px;

  @media only screen and ${breakpoints.device.xs} {
    width: 15rem;
    height: 15rem;
  }
`;

const Title = styled.h3`
  color: #f0493c;
  margin-top: 0.2rem;
`;

const StyledLink = styled.a`
  color: orange;
`;
const Text = styled.p`
  font-size: 0.9rem;
`;
const BoldText = styled(Text)`
  font-weight: bold;
`;

const BreweryCard = ({
  name,
  status,
  street,
  city,
  province,
  postal,
  phone,
  url,
}) => {
  return (
    <>
      <Card>
        <Title>{name}</Title>
        <BoldText>{status}</BoldText>
        <Text>{`${street}, ${city}, ${province}, ${postal}`}</Text>
        <Text>{phone}</Text>
        <Text>
          {url ? (
            <StyledLink href={`http://${url}`} target='_blank' rel='noreferrer'>
              Website
            </StyledLink>
          ) : null}
        </Text>
      </Card>
    </>
  );
};

export default BreweryCard;
