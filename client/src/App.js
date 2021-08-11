import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Activities from './components/Activity/activities';
import CountryId from './components/Countries/CountryId'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/countries' component={Home} />
          <Route path ="/activities"component={Activities} />
        <Route exact path="/countries/:id" component={CountryId} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
