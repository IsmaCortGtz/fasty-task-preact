// Libs
import { route } from 'preact-router';
import { homepage } from '../../app/const';
import { useContext } from 'preact/hooks';
import { GlobalStateContext } from '../../app/State/State';

// Styleas and assets
import Icon from './../../assets/icon.svg';
import Back from './Back';
import routeflow from './routeflow.json';
import './Navbar.css';

// Page component
export default function Navbar () {
  // Gloabl state
  const global = useContext(GlobalStateContext);

  const goBack = () => {
    const goTo = routeflow[global.stateTemp.CURRENT_PAGE.value] || routeflow.DEFAULT_BACK_FLOW;
    route(homepage(goTo));
  };

  // Go home only if API url is configured
  const goHome = () => {
    if (!global.stateless.API_URL) return;
    route(homepage('/'));
  };

  return (
    <nav className='navbar-component_container'>
      {
        global.stateTemp.CURRENT_PAGE.value !== '/' && !!global.stateless.API_URL
          ? <Back onClick={goBack} />
          : null
      }
      <img onClick={goHome} src={Icon} alt='fasty-task' className='navbar-component_icon-image' />
      <h1 onClick={goHome} className='navbar-component_title'>Fasty Task</h1>
    </nav>
  );
}
