import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import itchIcon from '../assets/itch-io-svgrepo-com.svg';

function Navigation ({ onNavigate, currentPage }) {
    const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);

    const isNavCurrentPage = (page) =>{
        return page === currentPage;
    }

    function handleBurgerClick() {
        setIsNavigationExpanded(!isNavigationExpanded);
    }

    return (
        <div style={{width: "100%"}}>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow navigationItems">
                        <div className="navLinkLeft">
                            <div className="block menuBurger">
                                <button onClick={handleBurgerClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                                    </svg>
                                </button>
                            </div>
                            <NavLink className={`navLink ${isNavCurrentPage('home') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('home')} to={`home`}>Home</NavLink>
                            <NavLink className={`navLink ${isNavCurrentPage('games') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('games')} to={`games`}>Games</NavLink>
                            <NavLink className={`navLink ${isNavCurrentPage('about') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('about')} to={`about`}>About</NavLink>
                            <NavLink className={`navLink ${isNavCurrentPage('contact') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('contact')} to={`contact`}>Contact</NavLink>
                        </div>
                        <div className='navLinkRight'>
                            <a className="navLinkRightIcon" href="https://github.com/lucasberg29" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ width: '34px', height: '34px' }}/>
                            </a>
                            <a className="navLinkRightIcon" href="https://lucasberg29.itch.io/">
                                <img  width="100%" className="itchIcon" src={itchIcon} alt="itch.io logo"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={isNavigationExpanded ? 'mobileNav expandedNav' : 'mobileNav'}>
                <NavLink className={`navExpandedLink ${isNavCurrentPage('home') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('home')} to={`home`}>Home</NavLink>
                <NavLink className={`navExpandedLink ${isNavCurrentPage('games') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('games')} to={`games`}>Games</NavLink>
                <NavLink className={`navExpandedLink ${isNavCurrentPage('about') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('about')} to={`about`}>About</NavLink>
                <NavLink className={`navExpandedLink ${isNavCurrentPage('contact') ? 'activeNavLink' : ''}`} onClick={() => onNavigate('contact')} to={`contact`}>Contact</NavLink>
            </div>
        </div>
    );
};

export default Navigation;
