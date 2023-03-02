import logo from '../../images/logo.png';
import mob from '../../images/footermobile.png'
import phone from '../../images/footerphone.png'
import inst from '../../images/inst.png'
import faceb from '../../images/faceb.png'
import whats from '../../images/whats.png'
import moore from '../../images/moore.png'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="">
                    <div className='footer__title'><span>Kanzler&Bürger</span> <p className="line"></p></div>
                    <div className="footer__info">
                        <div className="footer__info-col ">
                            <p className='footer__info-subtitle'>Меню</p>
                            <ul className='footer__info-ul first'>
                                <li>Каталог</li>
                                <li>Акции</li>
                                <li className='li'>Популярные товары</li>
                                <li>Новинки</li>
                                <li>Новости</li>
                                <li>О компании</li>
                                <li>Контакты</li>
                            </ul>
                            <div className="header__logo-box">
                                <div className="header__logo-black"></div>
                                <img className='header__logo' src={logo} alt="Burger logo" />
                            </div>
                        </div>
                        <div className="footer__info-col">
                            <p className='footer__info-subtitle'>Категории</p>
                            <ul>
                                <li>Бумага</li>
                                <li>Письмо и графика</li>
                                <li>Канц товары</li>
                                <li>Художественные товары</li>
                                <li>Творчество</li>
                                <li>Полиграфические материалы</li>
                                <li>Офисное  оборудование</li>
                                <li>Игры и игрушки</li>
                                <li>Сувенирная продукция</li>
                            </ul>
                        </div>
                        <div className="footer__info-col">
                            <p className='footer__info-subtitle'>Контакты</p>
                            <ul>
                                <li className='footer__info-address'>Огонбаева, 222</li>
                                <li>
                                    <img src={mob} width='15' alt="mobile" />
                                    0777 90 22 33
                                </li>
                                <li>
                                    <img src={phone} width='15' alt="phone" />
                                    0312 90 22 33
                                </li>
                                <li className='footer__info-address'>Эркиндик, 7</li>
                                <li>
                                    <img src={mob} width='15' alt="mobile" />
                                    0777 90 22 34
                                </li>
                                <li>
                                    <img src={phone} width='15' alt="phone" />
                                    0312 90 22 34
                                </li>
                                <li className='footer__info-address'>Уметалиева, 84</li>
                                <li>
                                    <img src={mob} width='15' alt="mobile" />
                                    0777 90 22 36
                                </li>
                                <li>
                                    <img src={phone} width='15' alt="phone" />
                                    0312 90 22 36
                                </li>
                            </ul>
                        </div>
                        <div className="footer__info-col">
                            <p className='footer__info-subtitle'>Мы в соц сетях</p>
                            <ul>
                                <li>
                                    <img src={inst} width='15' alt="instagram" />
                                    Instagram
                                </li>
                                <li>
                                    <img src={faceb} width='15' alt="facebook" />
                                    Facebook
                                </li>
                                <li>
                                    <img src={whats} width='15' alt="mobile" />
                                    What’s App
                                </li>
                            </ul>
                            <img className='footer__moore' src={moore} width='94' alt="made in Moore Studio" />
                        </div>
                    </div>
                </div>
                <div className="footer__rights">
                    Kanzler & Burger (c) 2017. All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;