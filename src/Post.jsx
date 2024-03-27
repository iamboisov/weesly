import { useParams, Link } from 'react-router-dom';
import './styles/post.scss'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx';
import news from './data.js';


function Post() {

    const post_params = useParams();
    const article_index = Number(post_params.url.toString().slice(7)) - 1;
    let article = news[article_index]
    return(
            
            <>
            <Menu />
            <div className="news-container">
                <div className="news-body">
                    <div className="date">{article.date}</div>
                    <h2>{article.header}</h2>
                    <img src={require(`${article.img}`)} alt="" srcset="" />
                    <p className="text">{article.text}</p>
                </div>

                <div className="related-news">
                    {article.related.map((rel) => {
                        const related_article_index = Number(rel.slice(7)) - 1
                        const related_article = news[related_article_index]
                        return <div className='related-item'>
                                <img src={require(`${related_article.img}`)} alt="" />
                                <h4><a href={rel}>{related_article.header}</a></h4>
                        </ div>
                    })}
                </div>
            </div>
            <Footer />
            </>
    )
}

export default Post