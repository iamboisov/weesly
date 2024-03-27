import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import './styles/menu.scss';

function Main() {
    return(
        <div>
            <Menu active={true}/>
            <div>--------------------------------------------</div>
            <Footer />
        </div>
    )
  
  }

export default Main;