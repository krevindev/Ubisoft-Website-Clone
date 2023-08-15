import './Header.css';

import ubisoftLogo from '../../res/images/svg/ubisoft-logo.svg';

export default function Header() {
    return (
        <header id="header">
            <div className='header-part'>
                <a href='#'>
                    <img src={ubisoftLogo} />
                </a>
            </div>
            <div className='header-part'>
                <ul>
                    <li className='header-navlink'>PLAY</li>
                    <li className='header-navlink'>SHOP</li>
                    <li className='header-navlink'>EXPLORE</li>
                    <li className='header-navlink'>HELP</li>
                </ul>
            </div>
            <div className='header-part'>
                <h3>Search</h3>
                <h3>Sign In</h3>
            </div>
        </header>
    )
}