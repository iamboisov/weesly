import './styles/menu.scss';
import { useState } from 'react';



export default function Menu() {
        const [ isActive, setActive ] = useState(false);
        const toggleClass = () => {
            setActive(!isActive)
        }

        return <div className='Menu-mobile'>
            <div className="three col">
                <div className={`hamburger ${isActive ? "is-active" : ""}`} id="hamburger-1" onClick={toggleClass}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
        </div>
            <div className='Menu-container'>
                <a className='Menu-logo' href="/"><img src="../Vector.jpg" alt=""/></a>
                <div className='Menu-links'>
                    <a href="/news">Новости</a>
                    <a href="/questions">Вопросы</a>
                    <a href="/knowledgebase">База знаний</a>
                    <a href="/companies">Компании</a>
            </div>
            </div>
        </div>
}









