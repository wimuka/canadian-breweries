import BreweryState from './Context/BreweryState';

import Header from './Components/Header';
import Search from './Components/Search';
import BreweryResults from './Components/BreweryResults';
import Flags from './Components/Flags';

function App() {
  return (
    <BreweryState>
      <>
        <Header />
        <Flags />
        <Search />
        <BreweryResults />
      </>
    </BreweryState>
  );
}

export default App;
