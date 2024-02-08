// Libs
import { Link, route } from 'preact-router';
import { useSignal } from '@preact/signals';
import { homepage } from '../../app/const';
import { wrongToast, succesToast, newToast } from '../../utils/toast';
import { useContext, useEffect } from 'preact/hooks';
import { GlobalStateContext } from '../../app/State/State';

// Styles and assets
import './Login.css';

// Components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { login } from '../../api/user';

// Singup Page
export default function Singup () {
  // Login inputs states
  const global = useContext(GlobalStateContext);
  useEffect(() => {
    if (global.stateless.USER_AUTH_JWT) { newToast("You're already logged."); route(homepage('/')); }
  }, []);

  const username = useSignal('');
  const password = useSignal('');
  const hidePassword = useSignal(true);

  const getSingupParams = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const afterAuth = urlSearchParams.get('afterAuth') ? `?afterAuth=${urlSearchParams.get('afterAuth')}` : '';
    return homepage(`/singup${afterAuth}`);
  };

  // Hanlde URL inputs events
  const handleUsernameChange = (event) => { username.value = event.target.value; };
  const handlePasswordChange = (event) => { password.value = event.target.value; };
  const handleHidePasswordChange = (event) => { hidePassword.value = !event.target.checked; };
  const handleLogin = () => {
    login(global.stateless.API_URL, { username: username.value, password: password.value })
      .then(data => {
        global.stateless.USER_AUTH_JWT = data.token;
        global.actions.saveOneStateless('USER_AUTH_JWT');
        succesToast('Succesfull logged!');
        route(homepage('/'));
      })
      .catch(error => wrongToast(error.message));
  };

  // Render
  return (
    <div className='auth-page_container'>
      <h2 className='auth-page_title'>Log in your account</h2>
      <form className='auth-page_input_container'>
        <Input value={username.value} onInput={handleUsernameChange} placeholder='Username' />
        <Input value={password.value} onInput={handlePasswordChange} placeholder='Password' hidePassword={hidePassword.value} type='password' />
        <Checkbox onChange={handleHidePasswordChange} id='auth-hidepassword-checkbox' label='Show password' />
        <Button onClick={handleLogin}>Log in</Button>
      </form>
      <p className='auth-page_login-p'>Dont have an account? <Link class='Link-component_anchor' href={getSingupParams()}>Sing up</Link></p>
    </div>
  );
}
