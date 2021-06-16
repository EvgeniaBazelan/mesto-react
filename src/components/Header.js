import React from 'react';
import logo from '../images/logo-header.svg'


function Header() {
    return(
        <header className="header">
            <img className="header__logo" alt="логотип место" src={logo}/>

        </header>
    )
}
export default Header