import logo from "./logo.svg";
import "./App.css";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import GlobalHeader from "./components/GlobalHeader";
import "@trussworks/react-uswds/lib/index.css";
import "./styles/index.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  let teamPathname = t("team.pathname");
  let contactPathname = t("contact.pathname");

  return (
    <div className="App">
      <Router>
        <GlobalHeader />
        <Switch>
          <Redirect exact from="/" to={"/ourTeam"} />
          <Route path={teamPathname}>
            <Team />
          </Route>
          <Route path={contactPathname}>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
