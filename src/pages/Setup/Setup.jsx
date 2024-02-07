// Libs
import { useEffect, useContext } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import { route } from 'preact-router';
import { homepage } from '../../app/const';
import { validateAPI } from '../../api/validate';
import { GlobalStateContext } from '../../app/State/State';

// Styles and assets
import './Setup.css';

// Components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { wrongToast, succesToast } from '../../utils/toast';

// Setup Page
export default function Setup () {
  // Gloabl state
  const global = useContext(GlobalStateContext);

  // Input value state
  const input = useSignal('');

  // Hanlde URL input change
  const handleInputChange = (event) => { input.value = event.target.value; };

  // Hanlde URL button press
  const handleButtonPress = (event) => setApiUrl(input.value);

  // Change API URL if is valid
  const setApiUrl = (rawURL) => {
    // Validate if afterAuth param is present
    const urlSearchParams = new URLSearchParams(window.location.search);
    const afterAuth = urlSearchParams.get('afterAuth') ? `?afterAuth=${urlSearchParams.get('afterAuth')}` : '';

    // Validate API URL
    validateAPI(rawURL)
      .then((apiUrl) => {
        if (!apiUrl) return wrongToast('Invalid API URL');
        succesToast('API URL configured successfully!');
        global.stateless.API_URL = apiUrl;
        global.actions.saveOneStateless('API_URL');
        route(homepage(`/login${afterAuth}`));
      })
      .catch(error => { wrongToast('Invalid API URL'); console.error('Invalid API URL', error); });
  };

  // Check if URL passed as param
  useEffect(async () => {
    // Validate if param is present
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    if (!urlSearchParams.get('apiUrl')) return;

    // Change URL if is valid
    setApiUrl(decodeURIComponent(urlSearchParams.get('apiUrl')));
  }, []);

  // Render
  return (
    <div className='setup-page_container'>
      <h2 className='setup-page_title'>Setup API URL</h2>
      <form className='setup-page_input_container'>
        <Input value={input.value} onInput={handleInputChange} placeholder='https://example.com/' />
        <Button onClick={handleButtonPress}>Validate</Button>
      </form>
    </div>
  );
}
