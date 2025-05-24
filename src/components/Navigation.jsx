import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import itchIcon from '../assets/icons/itch-io-svgrepo-com.svg';

function Navigation({ onNavigate, currentPage }) {
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);

  const isNavCurrentPage = (page) => page === currentPage;

  function handleBurgerClick() {
    setIsNavigationExpanded(!isNavigationExpanded);
  }

  const navItem = (page, label, className = 'navLink') => (
    <button
      className={`${className} ${isNavCurrentPage(page) ? 'activeNavLink' : ''}`}
      onClick={() => {
        onNavigate(page);
        setIsNavigationExpanded(false);
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ width: '100%' }}>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow navigationItems">
            <div className="navLinkLeft">
              <div className="block menuBurger">
                <button
                  onClick={handleBurgerClick}
                  className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              {navItem('home', 'Home')}
              {navItem('games', 'Games')}
              {navItem('contact', 'Contact')}
            </div>
            <div className="navLinkRight">
              <a
                className="navLinkRightIcon"
                href="https://github.com/lucasberg29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon style={{ width: '34px', height: '34px' }} />
              </a>
              <a
                className="navLinkRightIcon"
                href="https://lucasberg29.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="100%" className="itchIcon" src={itchIcon} alt="itch.io logo" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className={isNavigationExpanded ? 'mobileNav expandedNav' : 'mobileNav'}>
        {navItem('home', 'Home', 'navExpandedLink')}
        {navItem('games', 'Games', 'navExpandedLink')}
        {navItem('contact', 'Contact', 'navExpandedLink')}
      </div>
    </div>
  );
}

export default Navigation;
