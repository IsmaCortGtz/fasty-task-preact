import { useContext } from 'preact/hooks';
import { GlobalStateContext } from '../../app/State/State';
import { newToast } from '../../utils/toast';
import { route } from 'preact-router';
import { homepage } from '../../app/const';

export default function Account () {
  const global = useContext(GlobalStateContext);
  const handleLogout = () => {
    global.actions.removeOneStateless('USER_AUTH_JWT');
    newToast('Logged out');
    route(homepage('/'));
  };

  return (
    <div>
      <h1>Account</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
