import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation ({ onNavigate }) {
    const baseURL = import.meta.env.VITE_BASE_URL;
    return (
        <div style={{width: "100%"}}>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <NavLink className={({ isActive }) => `navLink ${isActive ? 'activeNavLink' : ''}`} onClick={() => onNavigate('home')} to={`${baseURL}home`}>Home</NavLink>
                        <NavLink className={({ isActive }) => `navLink ${isActive ? 'activeNavLink' : ''}`} onClick={() => onNavigate('games')} to={`${baseURL}games`}>Games</NavLink>
                        <NavLink className={({ isActive }) => `navLink ${isActive ? 'activeNavLink' : ''}`} onClick={() => onNavigate('about')} to={`${baseURL}about`}>About</NavLink>
                        <NavLink className={({ isActive }) => `navLink ${isActive ? 'activeNavLink' : ''}`} onClick={() => onNavigate('contact')} to={`${baseURL}contact`}>Contact</NavLink>
                    </div>
                    <div>
                        {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;