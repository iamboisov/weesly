import { Component } from 'react';
// import { Component } from './News';
import './styles/menu.scss';



export default class Menu extends Component {
    render() {
        return <div className='Menu-container'>
            <a className='Menu-logo' href="/"><img src="../Vector.jpg" alt=""/></a>
            <div className='Menu-links'>
                <a href="/news">Новости</a>
                <a href="/questions">Вопросы</a>
                <a href="/knowledgebase">База знаний</a>
                <a href="/companies">Компании</a>
            </div>
        </div>
    }
}






