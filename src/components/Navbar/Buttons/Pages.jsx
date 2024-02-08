import Icon from '../../Icon/Icon';
import { route } from 'preact-router';
import { homepage, isCurrent } from '../../../app/const';
import { useContext } from 'preact/hooks';
import { GlobalStateContext } from '../../../app/State/State';

export default function Pages () {
  const global = useContext(GlobalStateContext);
  const changePage = (page) => {
    return () => {
      if (page === global.stateTemp.CURRENT_PAGE.value) return;
      route(homepage(page));
    };
  };

  return (
    <div className='Navbar-Pages-component_div-container'>
      <PageElement icon='󱃕' onClick={changePage('/')} selected={isCurrent('/', global.stateTemp.CURRENT_PAGE.value)} />
      <PageElement icon='󰃭' onClick={changePage('/schedule')} selected={isCurrent('/schedule', global.stateTemp.CURRENT_PAGE.value)} />
      <PageElement icon='󰂺' onClick={changePage('/subjects')} selected={isCurrent('/subjects', global.stateTemp.CURRENT_PAGE.value)} />
      <PageElement icon='󰀄' onClick={changePage('/account')} selected={isCurrent('/account', global.stateTemp.CURRENT_PAGE.value)} />
    </div>
  );
}

function PageElement ({ onClick, selected, icon, message }) {
  return (
    <div onClick={onClick} className={`Navbar-Pages-component_div-element ${selected ? 'selected' : ''}`}>
      <Icon icon={icon} />
      {
        message
          ? <span>{message}</span>
          : null
      }
    </div>
  );
}
