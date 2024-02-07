// Libs
import { useSignal } from '@preact/signals';
import { Link } from 'preact-router';
import { homepage } from '../../app/const';
import { wrongToast } from '../../utils/toast';
import { validatePassword, validateUsername } from '../../utils/validateCredentials';

// Styles and assets
import './Singup.css';

// Components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import PassRequirement from '../../components/PassRequirement/PassRequirement';

// Singup Page
export default function Singup () {
  // Input value state
  const username = useSignal('');
  const usernameValid = useSignal(false);
  const password = useSignal('');
  const rePassword = useSignal('');
  const hidePassword = useSignal(true);
  const passwordNotEqual = useSignal(false);
  const passwordValid = useSignal(false);

  // Get afterAuth param for login page
  const getLoginParams = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const afterAuth = urlSearchParams.get('afterAuth') ? `?afterAuth=${urlSearchParams.get('afterAuth')}` : '';
    return homepage(`/login${afterAuth}`);
  };

  const checkUsername = (current) => { usernameValid.value = (!validateUsername(current) && current !== ''); };

  // Validate passwords requirements
  const checkPasswords = (current, other) => {
    if (current === other) passwordNotEqual.value = false;
    else passwordNotEqual.value = true;

    if ((!validatePassword(current) && !validatePassword(other)) && (current !== '' || other !== '')) {
      passwordValid.value = true;
    } else passwordValid.value = false;
  };

  // Hanlde URL input change
  const handleUsernameChange = (event) => {
    username.value = event.target.value;
    checkUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    password.value = event.target.value;
    checkPasswords(event.target.value, rePassword.value);
  };

  const handleRepeatPasswordChange = (event) => {
    rePassword.value = event.target.value;
    checkPasswords(event.target.value, password.value);
  };

  const handleSingup = () => {
    wrongToast('Feauture not ready yet!');
  };

  const handleHidePasswordChange = (event) => { hidePassword.value = !event.target.checked; };

  // Render
  return (
    <div className='auth-page_container'>
      <h2 className='auth-page_title'>Create new account</h2>
      <form className='auth-page_input_container'>
        <Input value={username.value} wrong={usernameValid.value} onInput={handleUsernameChange} placeholder='Username' />
        <PassRequirement active={usernameValid.value} message='Your username must have between 5 and 20 characters, you can use letters and numbers. But the firts character need to be leteer. ' />
        <Input value={password.value} wrong={passwordNotEqual.value || passwordValid.value} onInput={handlePasswordChange} placeholder='Password' hidePassword={hidePassword.value} type='password' />
        <Input value={rePassword.value} wrong={passwordNotEqual.value || passwordValid.value} onInput={handleRepeatPasswordChange} placeholder='Repeat password' hidePassword={hidePassword.value} type='password' />
        <PassRequirement active={passwordNotEqual.value} message='Passwords need to be equal.' />
        <PassRequirement active={passwordValid.value} message='Your password must have between 8 and 50 characters, at least 1 upperacse, 1 lowercase, 1 number and 1 special symbol.' />
        <Checkbox onChange={handleHidePasswordChange} id='auth-hidepassword-checkbox' label='Show password' />
        <Button onClick={handleSingup}>Sing Up</Button>
      </form>
      <p className='auth-page_login-p'>Already have an account? <Link class='Link-component_anchor' href={getLoginParams()}>Log in</Link></p>
    </div>
  );
}
