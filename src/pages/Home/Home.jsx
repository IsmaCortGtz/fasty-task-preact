// Components
import NotLogged from './NotLogged';

// Styles and assets
import './Home.css';
import { GlobalStateContext } from '../../app/State/State';
import { useContext } from 'preact/hooks';

export default function Home () {
  const global = useContext(GlobalStateContext);
  if (!global.stateless.USER_AUTH_JWT) return (<NotLogged />);

  return (
    <div>
      Tasks
    </div>
  );
}
