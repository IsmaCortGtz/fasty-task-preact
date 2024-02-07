// Libs
import { Link } from 'preact-router';
import { useSignal } from '@preact/signals';
import { homepage } from '../../app/const';
import { wrongToast } from '../../utils/toast';

// Styles and assets
import './Login.css';

// Components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';

// Singup Page
export default function Singup () {
  // Login inputs states
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
  const handleLogin = () => wrongToast('Feauture not ready yet!');

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
