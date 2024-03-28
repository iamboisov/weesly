import { useParams, Link } from 'react-router-dom';
import './styles/article.scss'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx';
import { articles } from './data.js';


function Article(props) {
    const post_params = useParams();
    const article_index = Number(post_params.url.toString().slice(7)) - 1;
    let articl = articles.marketing[article_index]
    
    return <>
                <Menu active={props.active}/>
                <div className="article-body">
                    <h2>{articl.header}</h2>
                    <img src={require(`${articl.sections[0].img}`)} alt="" srcset="" />
                    <p className="text">{articl.sections[0].text}</p>
                </div>
                <Footer />
    </>
}

export default Article