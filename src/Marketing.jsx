import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'
import Footer from './Footer.jsx';
import './styles/menu.scss';
import './styles/marketing.scss';
import { articles } from './data.js'

function Marketing() {
    return <>
        <Menu active="kb"/>
        <div className="marketing-articles">
            {articles.marketing.map((element) => {
                return <Link to={element.url}><div className="marketing-card">
                <div className="marketing-card-img">
                    <img src={require(`${element.sections[0].img}`)} alt="" srcset="" />
                </div>
                <div className="marketing-card-text">
                    <h4>{element.header}</h4>
                    <p>{`${element.sections[0].text.slice(0, 100)}...`}</p>
                </div>
            </div>
            </Link>
            })}
        </div>
        <Footer />
    </>
}

export default Marketing