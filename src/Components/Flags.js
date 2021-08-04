import { useContext } from 'react';
import BreweryContext from '../Context/BreweryContext';

import ab from '../Media/AB.png';
import bc from '../Media/BC.png';
import mb from '../Media/MB.png';
import nb from '../Media/NB.png';
import nl from '../Media/NL.png';
import ns from '../Media/NS.png';
import nt from '../Media/NT.png';
import nu from '../Media/NU.png';
import on from '../Media/ON.png';
import pe from '../Media/PE.png';
import qc from '../Media/QC.png';
import sk from '../Media/SK.png';
import yt from '../Media/YT.png';

import styled from 'styled-components';
import breakpoints from '../Styles/breakpoints';

//Styles
const FlagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  @media only screen and ${breakpoints.device.lg} {
    display: none;
  }
`;

const FlagCard = styled.button`
  width: 5.5rem;
  margin: 0.2rem;
  padding: 0.4rem;
  background-color: #fff;
  border-radius: 3px;
  border: solid 1px #d8d8d8;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: #f0493c;
    border-radius: 3px;
`;

const Flags = () => {
  const breweryContext = useContext(BreweryContext);
  const { getBreweries } = breweryContext;

  const flags = [
    { name: 'ab', src: ab },
    { name: 'bc', src: bc },
    { name: 'mb', src: mb },
    { name: 'nb', src: nb },
    { name: 'nl', src: nl },
    { name: 'ns', src: ns },
    { name: 'nt', src: nt },
    { name: 'nu', src: nu },
    { name: 'on', src: on },
    { name: 'pe', src: pe },
    { name: 'qc', src: qc },
    { name: 'sk', src: sk },
    { name: 'yt', src: yt },
  ];

  return (
    <>
      <FlagsWrapper>
        {flags.map(item => (
          <FlagCard onClick={() => getBreweries(item.name)} key={item.name}>
            <img src={item.src} alt='Flag' style={{ width: '3.5rem' }} />
          </FlagCard>
        ))}
      </FlagsWrapper>
    </>
  );
};

export default Flags;
