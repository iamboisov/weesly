import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import './styles/menu.scss';

function About() {
    return(
        <>
            <Menu active={"about"}/>
            <div>Questions</div>
            <Footer />
        </>
    )
  
  }

export default About;