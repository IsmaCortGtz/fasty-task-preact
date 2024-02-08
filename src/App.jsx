// Import libs
import { Router, route } from 'preact-router';
import { useContext, useEffect } from 'preact/hooks';
import { homepage, getPage } from './app/const';
import { validateAPI } from './api/validate';
import { wrongToast } from './utils/toast';

// Import Components
import Navbar from './components/Navbar/Navbar';
import { GlobalStateProvider, GlobalStateContext } from './app/State/State';

// Import pages
import Home from './pages/Home/Home';
import Setup from './pages/Setup/Setup';
import Singup from './pages/Singup/Singup';
import Login from './pages/Login/Login';
import Account from './pages/Account/Account';
import Error404 from './pages/Error404/Error404';

// App component
export function App () {
  const global = useContext(GlobalStateContext);

  // Cehck if API url is configured
  useEffect(() => {
    if (getPage() !== '/setup' && !global.stateless.API_URL) route(homepage('/setup'));
    validateAPI(global.stateless.API_URL)
      .then(() => { global.temp.APP_IS_ONLINE = true; })
      .catch(() => {
        global.temp.APP_IS_ONLINE = false;
        wrongToast('API is offline!');
      });
  }, []);

  return (
    <GlobalStateProvider>
      <Navbar />
      <div className='app-content-container'>
        <Router onChange={() => { global.stateTemp.CURRENT_PAGE.value = getPage(); }}>
          <Home path={homepage('/')} />
          <Setup path={homepage('/setup')} />
          <Singup path={homepage('/singup')} />
          <Login path={homepage('/login')} />
          <Account path={homepage('/account')} />
          <Error404 default />
        </Router>
      </div>
    </GlobalStateProvider>
  );
}
