import { useContext } from 'react';
import BreweryContext from '../Context/BreweryContext';

import styled from 'styled-components';
import breakpoints from '../Styles/breakpoints';

//Styles
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const StyledInput = styled.input`
  width: 30rem;
  height: 2rem;
  border: solid 1px #d8d8d8;
  border-radius: 2px;
  margin-bottom: 2rem;
  :focus {
    outline: solid 2px #ffcc99;
  }

  @media only screen and ${breakpoints.device.sm} {
    width: 15rem;
  }
`;

const StyledButton = styled.button`
  width: 4rem;
  cursor: pointer;
  background-color: #fff;
  color: inherit;
  border: solid 1px #d8d8d8;
  border-radius: 2px;
  margin-bottom: 2rem;
  margin-left: 0.2rem;

  :focus {
    outline: solid 2px #ffcc99;
  }
`;

const Search = () => {
  const breweryContext = useContext(BreweryContext);
  const { txtInput, onInputChange, getBreweries, clearInput } = breweryContext;

  return (
    <>
      <SearchWrapper>
        <StyledInput
          type='text'
          value={txtInput}
          onChange={e => onInputChange(e)}
          maxLength='27'
          placeholder='Province name'
        />
        <StyledButton onClick={() => getBreweries(txtInput)}>Find</StyledButton>
        <StyledButton onClick={() => clearInput()}>Clear</StyledButton>
      </SearchWrapper>
    </>
  );
};

export default Search;
