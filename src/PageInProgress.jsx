import Menu from './Menu.jsx'
import Footer from './Footer.jsx';
import './styles/menu.scss';
import './styles/page_in_progress.scss';

function PageInProgress(props) {
    return <>
        <Menu active={props.active}/>
        <div className="progress">
            Страница на стадии разработки. Спасибо за ваше терпение!
        </div>

        <Footer />
    </>
}

export default PageInProgress