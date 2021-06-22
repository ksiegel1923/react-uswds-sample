import "./App.css";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
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
  const { t } = useTranslation();

  let teamPathname = t("pathnames.team");
  let contactPathname = t("pathnames.contact");

  return (
    <div className="App">
      <Router>
        <GlobalHeader />
        <Switch>
          <Redirect exact from="/" to={teamPathname} />
          <Route path={teamPathname}>
            <Team />
          </Route>
          <Route path={contactPathname}>
            <Contact />
          </Route>
        </Switch>
        <GlobalFooter />
      </Router>
    </div>
  );
}

export default App;
