function NewsCard() {
    return <div className='news-card'>

    <div className="news-text">
        <div className="text-top">
            <p>Технологии</p>
            <h3>Топ 10 технологий будущего</h3>
        </div>
        <a href="/article">[ Прочитать ]</a>
    </div>

    <div className="news-img">
            <img src={require('./images/news/1.png')} alt="" />
        </div>
    </ div>
}

export default NewsCard