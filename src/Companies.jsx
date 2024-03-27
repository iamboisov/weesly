import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import './styles/menu.scss';


function Companies() {
    return(
        <>
            <Menu active={"comp"}/>
            <div>Companies</div>
            <Footer />
        </>
    )
  
  }

export default Companies;