import React from 'react';
import MyButton from '../UI/button/MyButton';
import cl from './myheader.module.css'

const MyHeader = () => {
	return (

		<nav className={cl.navbar}>
            <div className={cl.navbar__container}>
                <a href="index.html" id={cl.navbar__logo}>COLOR</a>
    
                <div className={cl.navbar__toggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
    
                <ul className={cl.navbar__menu}>
                    <li className={cl.navbar__item}>
                        <a href="index.html" className={cl.navbar__links} id="home-page">Home</a>
                    </li>
                    <li className={cl.navbar__item}>
                        <a href="#" className={cl.navbar__links} id="about-page">About</a>
                    </li>
                    <li className={cl.navbar__item}>
                        <a href="#" className={cl.navbar__links} id="Services-page">Services</a>
                    </li>
                    <li className="navbar__btn">
                        <MyButton>Sign-up</MyButton>
                    </li>
                </ul>
            </div>
        </nav>

	);
};

export default MyHeader;