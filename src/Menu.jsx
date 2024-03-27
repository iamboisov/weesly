import './styles/menu.scss';
import { useState } from 'react';



function Menu({ active }) {
        const [ isActive, setActive ] = useState(false);
        const toggleClass = () => {
            setActive(!isActive)
        }

        return <>
        <div className={`menu-links-mobile ${isActive ? "opened" : ""}`}>
            <div className="mobile-container">
                    <div className="hamburger" onClick={toggleClass}><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="32" height="4" fill="#F3F4FF"/>
                                            <rect y="10" width="32" height="4" fill="#F3F4FF"/>
                                            <rect y="20" width="32" height="4" fill="#F3F4FF"/>
                                            </svg>

                    </div>
                    <div className={"news-link menu-item " + (active === "news" ? "active-page" : "")}><div className='circle'></div><a href="/news">Новости</a></div>

                    <div className={"kb-link menu-item " + (active === "kb" ? "active-page" : "")}><div className='circle'></div><a href="/knowledgebase">База знаний</a></div>

                    <div className={"comp-link menu-item " + (active === "comp" ? "active-page" : "")}><div className='circle'></div><a href="/companies">Компании</a></div>

                    <div className={"about-link menu-item " + (active === "about" ? "active-page" : "")}><div className='circle'></div><a href="/about">О нас</a></div>
                    
                </div>
        </div>
        <div className='menu-container'>

                <div className="logo-container">
                    <a href="/">
                        <img src={require('./images/logo.png')} alt="" />
                    </a>
                </div>

                <div className="menu-links">
                    <div className={"news-link menu-item " + (active === "news" ? "active-page" : "")}><div className='circle'></div><a href="/news">Новости</a></div>

                    <div className={"kb-link menu-item " + (active === "kb" ? "active-page" : "")}><div className='circle'></div><a href="/knowledgebase">База знаний</a></div>

                    <div className={"comp-link menu-item " + (active === "comp" ? "active-page" : "")}><div className='circle'></div><a href="/companies">Компании</a></div>

                    <div className={"about-link menu-item " + (active === "about" ? "active-page" : "")}><div className='circle'></div><a href="/about">О нас</a></div>
                    
                </div>

                <div className="hamburger" onClick={toggleClass}>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="4" fill="#2C41FF"/>
                <rect y="10" width="32" height="4" fill="#2C41FF"/>
                <rect y="20" width="32" height="4" fill="#2C41FF"/>
                </svg>
                </div>
        </div>    
    </>
            
}


export default Menu








