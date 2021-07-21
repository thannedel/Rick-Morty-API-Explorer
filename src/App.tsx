import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LocationPage, CharacterPage, EpisodePage } from './Pages';
import { CharacterTable, EpisodeTable, LocationTable } from './ModelTables';
import NavBar from './common/NavBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <h1 className='title'>Characters</h1>
              <CharacterTable />
            </Route>
            <Route path='/episodes'>
              <h1 className='title'>Episodes</h1>
              <EpisodeTable />
            </Route>
            <Route path='/locations'>
              <h1 className='title'>Locations</h1>
              <LocationTable />
            </Route>
            <Route path='/character/:id'>
              <CharacterPage />
            </Route>
            <Route path='/episode/:id'>
              <EpisodePage />
            </Route>
            <Route path='/location/:id'>
              <LocationPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
