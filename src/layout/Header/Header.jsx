import React, { useState } from 'react';
import phone from '../../images/phone.png'
import logo from '../../images/logo.png'
import email from '../../images/mail.png'
import catalog from '../../images/catalog.png'
import loop from '../../images/search.png'
import cartImg from '../../images/cart.png'
import pers from '../../images/profile.png'
import { allProducts } from '../../helpers/allProducts';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart';

const Header = () => {
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState(false)
    const {cart} = useSelector(s => s.cart)
    const dispatch = useDispatch()
    let cartCount = 0;
    cart.forEach((item) => cartCount += item.count);

    const animateCart = (el) => {
        const b = document.querySelector(`[data-id~="${el.id}"]`)
        console.log(b);
        b.classList.add('size')
        setTimeout(() => {
            b.classList.add('hover')
        }, 200);
        setTimeout(() => {
            b.classList.remove('hover')
            b.classList.remove('size')
        }, 600);

        dispatch(addToCart([...cart].findIndex(obj => obj.id === el.id) >= 0 ?
        [...cart].map(obj => {
            if (obj.id === el.id) return {...el, count: obj.count + 1};
            else return obj
        })
        : [...cart, {...el, count: 1}]
    ))
    }

    return (
        <header className='header'>
            <div className="header__top">
                <nav className="container header__top-inner">
                    <div className={`burger-btn ${menu && 'active'}`} onClick={()=> setMenu(!menu)}>
                        <span/>
                    </div>
                    <div className={`blur ${menu && 'active'}`}/>
                    <ul className={`header__nav ${menu && 'active'}`}>
                        <li className='header__nav-li'>Каталог</li>
                        <li className='header__nav-li'>Акции</li>
                        <li className='header__nav-li'>Популярные товары</li>
                        <li className='header__nav-li'>Новинки</li>
                        <li className='header__nav-li'>Новости</li>
                        <li className='header__nav-li'>О компании</li>
                        <li className='header__nav-li'>Контакты</li>
                    </ul>
                    <a href="mailto:info@Kanzler.kg" className="header__email">
                        <img src={email} alt="mail to " />
                        info@Kanzler.kg
                    </a>
                    <a href="tel:+996707340701" className="header__tel">
                        <img src={phone} width='13' alt="phone call" />
                        Позвонить
                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L3.5 3L6 1" stroke="#E11E26" />
                        </svg>
                    </a>
                </nav>
            </div>
            <div className="container header__bot ">
                <div className="header__logo-box">
                    <div className="header__logo-black"></div>
                    <img className='header__logo' src={logo} alt="Burger logo" />
                </div>

                <button className='header__bot-catalog'>
                    <img src={catalog} alt="Каталог" />
                    Каталог
                    <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L3.5 3L6 1" stroke="#E11E26" />
                    </svg>
                </button>
                <label className='header__bot-search'>
                    <img className='header__bot-search-img' src={loop} alt="search" />
                    <input id='search' value={search} onChange={e => setSearch(e.target.value.toLowerCase())} className='header__bot-input' placeholder='Найти товар' type="search" />
                    <div className={`basket__card header__bot-products`}>
                    {
                        allProducts.length && allProducts.filter((el, idx )=> search === '' ? idx >= allProducts.length - 2 : el.title.toLowerCase().includes(search) ).map(el =>(
                            <div className="header__bot-card" key={el?.id}>

                                <img src={el.image} width='30' alt={el.title} />
                                <p>{el.title}</p>
                                <div className='price'>
                                    <span className='basket__table-newPrice'>{el.newPrice} </span>
                                    <span className={el.newPrice && 'basket__table-oldPrice'}> {el.price}c</span>
                                </div>
                                <button className='add-to-cart' data-id={el.id} onClick={() => animateCart(el)}>
                                     в корзину
                                </button>
                            </div>
                        ))
                    }
                </div>
                </label>
                

                <div className="header__bot-btns">
                    <button className='header__bot-btn'>
                        <img src={cartImg} alt="cart" />
                        <div className='header__bot-count'>{cartCount}</div>
                    </button>
                    <button className='header__bot-btn'>
                        <img src={pers} alt="cart" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;