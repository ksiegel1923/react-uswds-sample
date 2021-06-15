import logo from "./logo.svg";
import "./App.css";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import GlobalHeader from "./components/GlobalHeader";
import "./styles/index.scss";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import "@trussworks/react-uswds/lib/index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalHeader />
        <Switch>
          <Redirect exact from="/" to="/ourTeam" />
          <Route path="/ourTeam">
            <Team />
          </Route>
          <Route path="/contactUs">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
