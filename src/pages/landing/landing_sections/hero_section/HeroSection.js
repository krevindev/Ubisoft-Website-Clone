import './HeroSection.css';

import bg1 from '../../../../res/images/hero-images/acmirage-homescreen-bg-desktop.webp';
import bg2 from '../../../../res/images/hero-images/ubi-homescreen-r6-y8s3-bg-desktop.avif';
import bg3 from '../../../../res/images/hero-images/ubi-homescreen-store-ac_franchise_sale_2023-bg-desktop.avif';
import bg4 from '../../../../res/images/hero-images/ubi-homescreen-swo-fwd23-bg-desktop.avif';
import bg5 from '../../../../res/images/hero-images/ubi-homescreen-ac_jade_beta-bg-desktop.avif';
import bg6 from '../../../../res/images/hero-images/ubi-homescreen-slide-tcm_fwd23-bg-desktop.avif';
import bg7 from '../../../../res/images/hero-images/ubi-homescreen-mrsh-dlc3-desktopIMG.avif';
import bg8 from '../../../../res/images/hero-images/ubi-pop_lc-fwd23-bg-desktop.avif';
import bg9 from '../../../../res/images/hero-images/xdefiant-homescreen-bg-desktop.avif';
import bg10 from '../../../../res/images/hero-images/ubi-homescreen-afop-keyart-v1.avif';
import bg11 from '../../../../res/images/hero-images/jd24-homescreen-bg-desktop.avif';
import bg12 from '../../../../res/images/hero-images/keyart.avif';
import bg13 from '../../../../res/images/hero-images/ubi-homescreen-ubiplus_xbox-bg-desktop3.avif';

import title1 from '../../../../res/images/hero-game-titles/ACM-White-Orange-crest-v1.webp';

import ubisoftSignTag from '../../../../res/images/hero-images/ubisoft-signtag.avif';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {

    const heroCarouselData = [
        {
            bgSrc: bg1,
            title: "ASSASSIN'S CREED MIRAGE",
            detail: "Become Basim, a cunning street thief with nightmarish visions seeking answers and justice. Available October 12, 2023.",
            buttons: ['visit website', 'pre-order'],
            buttonsColor: '#B65F38'
        },
        {
            bgSrc: bg2,
            title: "OPERATION HEAVY METTLE",
            detail: "Our newest Attacker, Ram, comes to us from South Korea and is ready to join the ranks of Redhammer.",
            buttons: ['visit website'],
            buttonsColor: '#FE7E00'
        },
        {
            bgSrc: bg3,
            title: "UP TO 75% OFF ASSASSIN'S CREED GAMES",
            detail: "History is yours for the taking.",
            buttons: ['shop now'],
            buttonsColor: '#FF0D78'
        },
        {
            bgSrc: bg4,
            title: "STAR WARS OUTLAWS",
            detail: "Experience the first-ever open world Star Wars game, set between the events of The Empire Strikes Back and Return of the Jedi.",
            buttons: ['visit website', 'add to wishlist'],
            buttonsColor: '#000'
        },
        {
            bgSrc: bg5,
            title: "ASSASSIN’S CREED CODENAME JADE",
            detail: "Discover the full Assassin’s Creed experience on mobile during the Closed Beta running from August 3rd to August 11th.",
            buttons: ['register now'],
            buttonsColor: '#74A985'
        },
        {
            bgSrc: bg6,
            title: "THE CREW MOTORFEST.",
            detail: "Get 3 days of early access with Gold and Ultimate Edition.",
            buttons: ['watch trailer', 'pre-order'],
            buttonsColor: '#FC1D38'
        },
        {
            bgSrc: bg7,
            title: "DLC 3: RAYMAN IN THE PHANTOM SHOW",
            detail: "Rayman is back! And he is the special guest in a new mysterious dimension: the Phantom's Opera network studio.",
            buttons: ['watch trailer', 'visit website'],
            buttonsColor: '#2C05F2'
        },
        {
            bgSrc: bg8,
            title: "PRINCE OF PERSIA: THE LOST CROWN",
            detail: "Play as Sargon and evolve from sword-wielding prodigy to extraordinary legend!",
            buttons: ['watch trailer', 'pre-order'],
            buttonsColor: '#6805F5'
        },
        {
            bgSrc: bg9,
            title: "XDEFIANT",
            detail: "A free-to-play, fast-paced online arena shooter inspired by Ubisoft worlds. Coming later this summer.",
            buttons: ['learn more', 'add to wishlist'],
            buttonsColor: '#BA8100'
        },
        {
            bgSrc: bg10,
            title: "PROTECT PANDORA. BECOME NA'VI.",
            detail: "Reconnect with your lost heritage, discover what it truly means to be Na'vi, and join other clans to protect Pandora.",
            buttons: ['watch trailer', 'pre-order'],
            buttonsColor: '#016AA4'
        },
        {
            bgSrc: bg11,
            title: "JUST DANCE 2024 EDITION",
            detail: "Just Dance 2024 Edition launches on October 24. Dance and share exciting moments all year long with the #1 music video game platform of all time!",
            buttons: ['learn more', 'watch trailer'],
            buttonsColor: '#FFA100'
        },
        {
            bgSrc: bg12,
            title: "JOIN THE CLOSED BETA!",
            detail: "Enter the perilous paradise of Skull and Bones during the Closed Beta running from August 25th to August 28th",
            buttons: ['register now'],
            buttonsColor: '#E69D10'
        },
        {
            bgSrc: bg13,
            title: "DISCOVER UBISOFT+ MULTI ACCESS NOW ON XBOX!",
            detail: "Enjoy more ways to play your favorite Ubisoft games.",
            buttons: ['join now'],
            buttonsColor: '#006EF5'
        },
    ]

    return (
        <div id="hero-section">
            <HeroCarousel heroCarouselData={heroCarouselData} />
        </div>
    )
}

function HeroCarousel({ heroCarouselData }) {

    const carouselContentRef = useRef(null);
    const [currentData, setCurrentData] = useState(heroCarouselData[0]);


    useEffect(() => {
        carouselContentRef.current.style.animationName = 'carouselContentAnim';
    }, []);

    useEffect(() => {
        const carouselSwitchInterval = setInterval(() => {
            const currentIndex = heroCarouselData.findIndex(item => item.bgSrc === currentData.bgSrc);
            const nextIndex = (currentIndex + 1) % heroCarouselData.length;

            setCurrentData(heroCarouselData[nextIndex]);

            carouselContentRef.current.style.animationName = '';
            setTimeout(() => {
                carouselContentRef.current.style.animationName = 'carouselContentAnim';
            }, 10);
        }, 5000);

        return () => clearInterval(carouselSwitchInterval);
    }, [currentData]);

    return (
        <div id='hero-carousel'
            style={{
                backgroundImage: `url(${currentData.bgSrc})`
            }}
        >
            <img src={ubisoftSignTag} id='hero-signtag' />

            <div id='hero-carousel-content' ref={carouselContentRef}>
                <div id='carousel-title'>
                    <h1>{currentData.title}</h1>
                </div>
                <div id='carousel-details'>
                    <p>{currentData.detail}</p>
                </div>
                <div id='carousel-btn-container'>
                    {
                        currentData.buttons.map(buttonText => {
                            return (
                                <button className='hero-btn' style={{ background: currentData.buttonsColor || 'black' }}>
                                    <div className='hero-btn-backlight' />
                                    <h4>
                                        {
                                            buttonText
                                        }
                                    </h4>
                                </button>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}