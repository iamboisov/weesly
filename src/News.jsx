import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'
import Footer from './Footer.jsx';

import './styles/menu.scss';
import './styles/news_card.scss';
import './styles/news.scss';
import news from './data.js'

function News() {
    return(
        <>
            <Menu active={"news"}/>
            <div className="body">
                {
                    news.map((post) => {
                        return(
                        <div className='news-card'>
                        <div className="news-text">
                            <div className="text-top">
                                <p>{post.tag}</p>
                                <h3>{post.header}</h3>
                            </div>
                        <Link to={post.url}>[ Прочитать ]</Link>
                        </div>
        
                        <div className="news-img">
                                <img src={require(`${post.img}`)} alt="" />
                            </div>
                        </ div>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
  
  }

export default News;

