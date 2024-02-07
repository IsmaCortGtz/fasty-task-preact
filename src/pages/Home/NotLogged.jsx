// Libs
import { Link } from 'preact-router';
import { homepage } from '../../app/const';

export default function NotLogged () {
  return (
    <div className='Home-page_loggedout-container'>
      <h2>You are not logged in.</h2>
      <p>If you have an account <Link class='Link-component_anchor' href={homepage('/login')}>Login here.</Link></p>
      <p>Or you can create <Link class='Link-component_anchor' href={homepage('/singup')}>one here.</Link></p>
      <p>Even, you can change the API URL settings <Link class='Link-component_anchor' href={homepage('/setup')}>here.</Link></p>
    </div>
  );
}
