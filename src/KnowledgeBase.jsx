import Menu from './Menu.jsx'
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx'
import './styles/menu.scss';
import './styles/knowledge_base.scss';
// import articles from './data.js';

function KnowledgeBase() {
    return(
        <>
            <Menu active={"kb"}/>
            <div className="kb-body">
                <div className="kb-marketing">
                    <div className="marketing-header">
                        <h2>Контент маркетинг и с чем его едят</h2>
                        <div className="marketing-header-text">
                            <p>Данный раздел посвящен всем видам маркетинга. В разделе описаны основы, а также более продвинутые темы затрагивающие все аспекты бизнеса.</p>
                            <Link to={'marketing'}>[ Открыть раздел ]</Link>
                        </div>
                    </div>
                    <div className="marketing-cards">
                        {/* map */}

                        <div className="marketing-card">
                            <div className="marketing-card-img">
                                <img src={require('./images/marketing/1.jpeg')} alt="" srcset="" />
                            </div>
                            <div className="marketing-card-text">
                                <h2>Показатели метрики</h2>
                                <p>Как работают поисковые системы, ранжирование страниц, отображение в поиске, оптимизация копирайтинга и многое другое</p>
                            </div>
                        </div>

                        <div className="marketing-card">
                            <div className="marketing-card-img">
                                <img src={require('./images/marketing/13.jpg')} alt="" srcset="" />
                            </div>
                            <div className="marketing-card-text">
                                <h2>Как пользователи попадают на сайт?</h2>
                                <p>СММ. Что это такое и для чего это нужно бизнесу.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="black-solid">
                    <div className="solid-black-header">
                        {/* header */}
                    </div>
                    <div className="solid-black-text">
                        {/* text */}
                    </div>
                </div>

                <div className="kb-finance">
                <div className="marketing-header">
                        <h2>Корпоративные финансы для чайников</h2>
                        <div className="marketing-header-text">
                            <p>Корпоративные финансы, управление капиталом, диверсификация рисков и управление рисками. Раздел даст необходимые знания по управлению финансовым отделом предприятия.</p>
                            <Link to={'finance'}>[ Открыть раздел ]</Link>
                        </div>
                    </div>
                    <div className="marketing-cards">
                        {/* map */}

                        <div className="marketing-card">
                            <div className="marketing-card-img">
                                <img src={require('./images/finance/8.png')} alt="" srcset="" />
                            </div>
                            <div className="marketing-card-text">
                                <h2>Основы учета</h2>
                                <p>Основы финансового учета для предпринимателей. Эффективное управление финансами.</p>
                            </div>
                        </div>

                        <div className="marketing-card">
                            <div className="marketing-card-img">
                                <img src={require('./images/finance/14.png')} alt="" srcset="" />
                            </div>
                            <div className="marketing-card-text">
                                <h2>Финансовое планирование</h2>
                                <p>Долгосрочное финансовое планирование. Управление корпоративными финансами. Налоги.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="kb-management">
                <div className="marketing-header">
                        <h2>Менеджмент 101. Управление проектами</h2>
                        <div className="marketing-header-text">
                            <p>Менеджмент для предпринимателей. Данный раздел поможет разобраться в управлении проектами и ресурсами.</p>
                            <Link to={'management'}>[ Открыть раздел ]</Link>
                        </div>
                    </div>
                    <div className="marketing-cards">
                        {/* map */}

                        <div className="marketing-card">
                            <div className="marketing-card-img">
                                <img src={require('./images/management/7.jpg')} alt="" srcset="" />
                            </div>
                            <div className="marketing-card-text">
                                <h2>Построение команд</h2>
                                <p>Как строить эффективные команды и привлекать лучшие таланты.</p>
                            </div>
                        </div>

                        <div className="marketing-card">
                            <div className="marketing-card-img">
                                <img src={require('./images/management/12.jpg')} alt="" srcset="" />
                            </div>
                            <div className="marketing-card-text">
                                <h2>Управление конфликтами</h2>
                                <p>Управление конфликтами в коллективе. Решение споров и конфликтов между.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
  
  }

export default KnowledgeBase;