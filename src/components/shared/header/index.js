import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../assets/icons/menu.svg';
import Close from '../../../assets/icons/close.svg';
import './style.scss';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpened, setmenuOpened] = useState(false);
  const [menuIcon, setMenuIcon] = useState(Menu);
  const ul = useRef(null);

  const onMenuClick = () => {
    if (menuOpened) {
      ul.current.style.clipPath = 'polygon(0 0, 100% 0%, 100% 0, 0 0)';
      ul.current.style.webkitClipPath = 'polygon(0 0, 100% 0%, 100% 0, 0 0)';
      setMenuIcon(Menu);
      setmenuOpened(false);
    } else {
      ul.current.style.clipPath = 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)';
      ul.current.style.webkitClipPath = 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)';
      setMenuIcon(Close);
      setmenuOpened(true);
    }
  }

  const onMenuBlur = () => {
    setTimeout(() => {
      ul.current.style.clipPath = 'polygon(0 0, 100% 0%, 100% 0, 0 0)';
      ul.current.style.webkitClipPath = 'polygon(0 0, 100% 0%, 100% 0, 0 0)';
      setMenuIcon(Menu);
      setmenuOpened(false);
    }, 200);
  }

  const isIos = () => (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );

  useEffect((scroll = window.scrollY) => {
    const onResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > '750') {
        setmenuOpened(false);
        setMenuIcon(Menu);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  function RenderHeader() {
    if (width <= '750') {
      return (
        <header className="header">
          <Link id="main-link" to="/">Foodies</Link>
          <button
            onBlur={onMenuBlur}
            onClick={onMenuClick}
            onMouseOut={isIos() ? onMenuBlur : () => {}}
            className="menu"
            type ="button"
          >
            <img src={menuIcon} alt="menu" />
          </button>

          <ul className="mobile-ul" ref={ul}>
            <li><Link to="/acerca">Acerca de</Link></li>
            <li><Link to="/restaurantes">Restaurantes</Link></li>
            <li><Link to="/contactanos">Contáctanos</Link></li>
          </ul>
        </header>
      );
    }

    return (
      <header className='header'>
        <ul className="desktop-ul">
          <li>
            <Link id="main-link" to="/" className="li-a">
              Foodies
            </Link>
          </li>
          <li>
            <Link to="/acerca" className="li-a">
              Acerca de
            </Link>
          </li>
          <li>
            <Link className="li-a red-btn" to="/contact">
              Restaurantes
            </Link>
          </li>
          <li>
            <Link className="li-a red-btn" to="/contact">
              Menú
            </Link>
          </li>
          <li>
            <Link className="li-a red-btn" to="/contact">
              Contáctanos
            </Link>
          </li>
        </ul>
      </header>
    );
  }

  return RenderHeader();
}

export default Header;
