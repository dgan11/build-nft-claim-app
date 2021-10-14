import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LandingPageLayout from './layouts/LandingPageLayout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <LandingPageLayout>
          <HomePage />
        </LandingPageLayout>
      </Route>

      <Route path="/about">
        <LandingPageLayout>
          <AboutPage />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
