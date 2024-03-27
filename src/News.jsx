import Menu from './Menu.jsx'
import Footer from './Footer.jsx';
import NewsCard from './NewsCard.jsx'
import './styles/menu.scss';
import './styles/news_card.scss';

function News() {
    return(
        <>
            <Menu active={"news"}/>
            <NewsCard />
            <Footer />
        </>
    )
  
  }

export default News;