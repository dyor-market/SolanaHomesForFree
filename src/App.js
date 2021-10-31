import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home/Home.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      Psssttt... try  <Link to={`/4y5f5UxtvbKKtyR6aSRcHyxaG8RWfph1RUyHfTzNFXCt`} key={'lnt'}>
https://solanafree.house/4y5f5UxtvbKKtyR6aSRcHyxaG8RWfph1RUyHfTzNFXCt

    </Link>
      

            <Route
              path="/fair3d"
              component={() => {
                window.location.href =
                  'https://fair3d.me';
                return null;
              }}
            />
            <Route
              path="/linksnthat"
              component={() => {
                window.location.href = 'https://linktr.ee/STACCArt';
                return null;
              }}
            />

<Switch>
          <Route path="/:address" component={Home} />


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
