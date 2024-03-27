import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import './styles/menu.scss';

function KnowledgeBase() {
    return(
        <>
            <Menu active={"kb"}/>
            <div>Knowledge Base</div>
            <Footer />
        </>
    )
  
  }

export default KnowledgeBase;