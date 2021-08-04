import { useContext } from 'react';
import BreweryContext from '../Context/BreweryContext';

import BreweryCard from './BreweryCard';
import Spinner from './Spinner';

import styled from 'styled-components';
import breakpoints from '../Styles/breakpoints';

//Styles
const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 35rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;

  @media only screen and ${breakpoints.device.sm} {
    max-height: 90rem;
  }
`;

const BreweryResults = () => {
  const breweryContext = useContext(BreweryContext);
  const { breweryList, input, loading, provinceError } = breweryContext;

  return (
    <ResultsWrapper>
      {loading ? (
        <Spinner />
      ) : breweryList.length === 0 && input ? (
        <p>Sorry, nothing found</p>
      ) : provinceError !== '' ? (
        <p>Sorry, not enough data for this province</p>
      ) : (
        breweryList.map(location => {
          return (
            <BreweryCard
              key={location.id}
              name={location.name}
              id={location.id}
              status={location.status}
              street={location.street}
              city={location.city}
              province={location.state}
              postal={location.zip}
              phone={location.phone}
              url={location.url}
            />
          );
        })
      )}
    </ResultsWrapper>
  );
};

export default BreweryResults;
