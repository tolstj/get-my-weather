import logo from '../images/logo.png';
import '../css/style.css';
import geo from '../api/geo.js';
import City from "./City";
import { Link, Switch, Route } from "react-router-dom";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            {Object.keys(geo).map(city => <City key={city} name={city} />)}
          </Route>
          <Route path="/:city" children={<Weather />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
