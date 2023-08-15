import './Header.css';

import ubisoftLogo from '../../res/images/svg/ubisoft-logo.svg';
import searchIcon from '../../res/images/svg/search-icon.svg';
import userIcon from '../../res/images/user-icon.png';
import xIcon from '../../res/images/svg/x-icon.svg';
import dropDownIcon from '../../res/images/svg/dropdown-icon.svg';
import useWindowSize from '../../hooks/useWindowSize';
import { useEffect, useRef, useState } from 'react';


export default function Header() {

    const isMobile = useWindowSize().width <= 1234;
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [openedNavKey, setOpenedNavKey] = useState(null);

    useEffect(() => {
        if (!isMobile) {
            setIsMobileNavVisible(false);
            setOpenedNavKey(null);
        }
        if (!isMobileNavVisible) setOpenedNavKey(null);
    }, [isMobile, isMobileNavVisible]);

    const headerMobileNavData = {
        play: ['Browse by Category', 'Browse by Game', 'Ubisoft+'],
        shop: ['Shop by Game', 'Most Popular'],
        explore: ['News', 'About Us', 'Careers', 'Social Impact', 'More Than Games'],
        help: ['Browse by Category', 'Browse by Game', 'Ubisoft+'],

    }
    const headerMobileNav = Object.keys(headerMobileNavData).map((navKey, index) => {
        return (
            <HeaderMobileNavlink
                key={index}
                index={index}
                navlinkName={navKey.toUpperCase()}
                navlinkSub={headerMobileNavData[navKey]}
                setOpenedNavKey={setOpenedNavKey}
                openedNavKey={openedNavKey}
            />
        )
    });

    return (
        <header id="header" className={isMobile && 'mobile'}>
            <div className='header-part'>
                {
                    !isMobile ? <a href='#'>
                        <img src={ubisoftLogo} />
                    </a> :
                        <div id='mobile-nav-btn' onClick={() => setIsMobileNavVisible(prev => !prev)}>
                            {
                                !isMobileNavVisible ? <div id='mobile-dots-holder'>
                                    <div className='dot' />
                                    <div className='dot' />
                                    <div className='dot' />
                                </div> : <div id='mobile-dots-holder'>
                                    <img className='exit-btn' src={xIcon} />
                                </div>
                            }
                        </div>

                }
            </div>
            <div className='header-part'>
                {
                    !isMobile ? <ul>
                        <li className='header-navlink'>PLAY</li>
                        <li className='header-navlink'>SHOP</li>
                        <li className='header-navlink'>EXPLORE</li>
                        <li className='header-navlink'>HELP</li>
                    </ul> :
                        <a href='#'>
                            <img src={ubisoftLogo} />
                        </a>
                }
            </div>
            <div className='header-part'>
                <div className={isMobile ? 'header-right-icon hide' : 'header-right-icon'}>
                    <img src={searchIcon} />
                </div>
                <div className='header-right-icon' style={{ opacity: isMobileNavVisible ? 0 : 1 }}>
                    <img src={userIcon} />
                </div>
            </div>

            {
                isMobileNavVisible && isMobile && <div id='mobile-nav-container'>
                    {headerMobileNav}
                </div>
            }
        </header>
    )
}

function HeaderMobileNavlink({ index, navlinkName, navlinkSub, setOpenedNavKey, openedNavKey }) {

    const handleClick = () => {
        if (index == openedNavKey) {
            setOpenedNavKey(null);
        } else {
            setOpenedNavKey(index);
        }
    }

    return (
        <div className='mobile-navlink-container' onClick={e => {
            if (!Array.from(e.target.classList).includes('mobile-navlink-sub')) {
                handleClick()
            }
        }}>
            <div className='mobile-navlink-front' >
                <h1>{navlinkName}</h1>
                <img src={dropDownIcon} style={{ transform: openedNavKey == index && 'rotate(180deg)' }} />
            </div>
            <div className='mobile-navlink-sub-container'
                style={{
                    height: openedNavKey == index ? 'fit-content' : 0
                }}>
                {
                    navlinkSub.map((sub, subIndex) => {
                        return (
                            <li
                                className={openedNavKey == index ? 'mobile-navlink-sub in' : 'mobile-navlink-sub out'}
                                style={{ animationDelay: subIndex * .09 + 's' }}
                            >{sub}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}