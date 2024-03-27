import './styles/footer.scss'

function Footer() {
    return <>
        <div className="footer-container">
            <div className="footer-logo">
                <img src={require('./images/logo.png')} alt="Logo" />
                <p>Медиа-сервис <br /> для предпринимателей</p>
            </div>

            <div className="footer-links">
                <div className="footer-item">
                    <h4>Продукты</h4>
                    <a href="/media">Медиа</a>
                    <a href="/startuphub">StartupHub</a>
                </div>
                <div className="footer-item">
                    <h4>Ресурсы</h4>
                    <a href="/reference">Справочник</a>
                    <a href="/weeslyconf">Weesly Conf</a>
                </div>
                <div className="footer-item">
                    <h4>Компания</h4>
                    <a href="/contacts">Контакты</a>
                    <a href="/about">О нас</a>
                </div>
                
            </div>

            <div className="socials">
                <div className="socials-links">
                    <div className="socials-icons">
                    <a href="https://t.me/weeslycorp"><img src={require('./images/telegram.png')} alt="telegram link" /></a>
                    <a href="https://t.me/weeslycorp"><img src={require('./images/twitter.png')} alt="twitter link" /></a>
                    <a href="https://t.me/weeslycorp"><img src={require('./images/vk.png')} alt="vk link" /></a>
                    </div>
                    <p><span className='subscribe'>Подписывайтесь</span> на наши <br /> социальные сети</p>
                </div>
                <p className='address'>Пантелеевская улица,<br /> 53 Москва, 129110</p>
            </div>
        </div>
    </>
}

export default Footer;