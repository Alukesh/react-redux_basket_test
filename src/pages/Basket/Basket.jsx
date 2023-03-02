import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../../Components/EmptyCart';
import PhoneInput from '../../Components/PhoneInput';
import InputMask from 'react-input-mask'
import { addProductCount, decreaseProductCount, removeFromCart } from '../../redux/cart';

const Basket = () => {
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const { cart } = useSelector(s => s.cart)
    let price = 0;
    cart.forEach((item) => price += item.newPrice * item.count || item.price * item.count);
    let cartCount = 0;
    cart.forEach((item) => cartCount += item.count);

    const deleteFromCart = (el) => {
        dispatch(removeFromCart(el))
    }
    const addCount = (el) => {
        dispatch(addProductCount(el))
    }

    const removeCount = (el) => {
        dispatch(decreaseProductCount(el))
    }
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => {
        setPhone(value)
    };

    return (
        <main className='basket'>
            <div className="container">
                <div className="page__link"><span>Главная</span> / <span>Корзина</span> / <span>Оформление заказа</span></div>

                <h2 className="basket__title">Оформление заказа</h2>


                {
                    cart.length ?
                        <div className="basket__main">
                            <div className="basket__info">
                                <div className="basket__info-cart" onClick={() => setShow(!show)}>
                                    Корзина (3)
                                    <div className={`basket__info-cart-btn ${show && 'active'}`}>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.75 6.25L6 1L11.25 6.25" stroke="#333333" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`basket__table ${!show && 'hide'}`}>
                                    <div className="basket__table-row">
                                        <div className="">Фото</div>
                                        <div className="">Название</div>
                                        <div className="">Артикул</div>
                                        <div className="">Кол-во</div>
                                        <div className="">Цена</div>
                                        <div className="basket__table-rowdelete"></div>
                                    </div>
                                    {
                                        cart.map(el => (
                                            <div className="basket__table-row product" key={el?.id}>
                                                <img src={el.image} alt={el.title} />
                                                <div>{el.title}</div>
                                                <div>{el.article}</div>
                                                <div className='basket__table-count'>
                                                    <button onClick={() => el.count > 0 && removeCount(el)}>-</button>
                                                    {el.count}
                                                    <button onClick={() => addCount(el)}>+</button>
                                                </div>
                                                <div className='price'>
                                                    <span className='basket__table-newPrice'>{el.newPrice} </span>
                                                    <span className={el.newPrice && 'basket__table-oldPrice'}> {el.price}c</span>
                                                </div>
                                                <button className="basket__table-rowdelete" onClick={() => deleteFromCart(el)}>
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L7 7M13 13L7 7M7 7L13 1M7 7L1 13" stroke="#EA5A5A" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))
                                    }

                                </div>


                                <div className="basket__card">
                                    <div className="basket__card-title">Оформление заказа</div>
                                    <div className="basket__booking">
                                        <div className="basket__booking-side">
                                            <label>
                                                <div className="label">Имя</div>
                                                <input type="text" defaultValue={'Татьяна'} />
                                            </label>
                                            <div className='basket__booking-twiced'>
                                                {/* <label>
                                                    <div className="label">Телефон</div>
                                                    <input type="text" defaultValue={'+996 555 50 50 50'} />
                                                </label> */}
                                                <label>
                                                    <div className="label">Телефон</div>
                                                    <PhoneInput />
                                                </label>

                                                <label className='basket__booking-dop'>
                                                    <div className="label-half">Доб.</div>
                                                    <input className='half' defaultValue={0} type="number" max={9} min={0} />
                                                </label>
                                            </div>
                                            <label>
                                                <div className="label">Доп телефон или whatsapp</div>
                                                <InputMask placeholder={'Введите номер'} className={''}
                                                    mask='+\9\96(999) 999-999'
                                                    value={phone}
                                                    defaultValue={'707340701'}
                                                    alwaysShowMask={true}
                                                    onChange={handleInput}>
                                                </InputMask>
                                            </label>
                                        </div>

                                        <div className="basket__booking-side">
                                            <label>
                                                <div className="label">Фамилия</div>
                                                <input type="text" defaultValue={'Смолянинова'} />
                                            </label>

                                            <label>
                                                <div className="label">E-mail</div>
                                                <input type="text" defaultValue={'Tatyana@gmail.com'} />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="basket__card">
                                    <div className="basket__card-title">Я</div>
                                    <div className="basket__options">
                                        <div className="">
                                            <input defaultChecked className='basket__options-input' id='Individual' name='person' type="radio" />
                                            <label className='basket__options-label' htmlFor="Individual"><span>Физическое лицо</span></label>
                                        </div>
                                        <div className="">
                                            <input className='basket__options-input' id='Entity' name='person' type="radio" />
                                            <label className='basket__options-label' htmlFor="Entity"><span>Юридическое лицо</span></label>
                                        </div>
                                    </div>
                                </div>


                                <div className="basket__card">
                                    <div className="basket__card-title">Доставка</div>
                                    <p className="basket__card-title2">Способ  доставки</p>
                                    <div className="basket__options">
                                        <div className="basket__options-info">
                                            <input defaultChecked className='basket__options-input' id='pick' name='send' type="radio" />
                                            <label className='basket__options-label' htmlFor="pick">
                                                <span>Самовывоз</span>
                                            </label>
                                            <span>режим работы магазина
                                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L4 4L1 1" stroke="#5178DC" /></svg>
                                            </span>
                                        </div>
                                        <div className="basket__options-info">
                                            <input className='basket__options-input' id='express' name='send' type="radio" />
                                            <label className='basket__options-label' htmlFor="express">
                                                <span>Курьерская доставка</span>
                                            </label>
                                            <span>условия доставки
                                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L4 4L1 1" stroke="#5178DC" /></svg>
                                            </span>
                                        </div>
                                    </div>

                                    <p className="basket__card-title2">Адрес доставки</p>
                                    <div className="basket__booking">
                                        <div className="basket__booking-side">
                                            <label>
                                                <div className="label">Страна</div>
                                                <input type="text" defaultValue={'Кыргызстан'} />
                                            </label>
                                            <label>
                                                <div className="label">Улица</div>
                                                <input type="text" defaultValue={'Чуй 345'} />
                                            </label>
                                            <label>
                                                <div className="label">Дом</div>
                                                <input type="text" defaultValue={'1'} />
                                            </label>
                                        </div>
                                        <div className="basket__booking-side">
                                            <label>
                                                <div className="label">Город</div>
                                                <input type="text" defaultValue={'Бишкек'} />
                                            </label>

                                            <label>
                                                <div className="label">Квартира</div>
                                                <input type="text" defaultValue={'53'} />
                                            </label>
                                        </div>
                                    </div>
                                    <p className="basket__card-title2">Указать домофон, этаж, подъезд и комментарий к адресу</p>
                                    <div className="basket__booking">
                                        <label>
                                            <div className="label">Квартира</div>
                                            <input type="text" defaultValue={'53'} />
                                        </label>
                                    </div>
                                </div>

                            </div>


                            <div className="basket__card basket__total ">
                                <div className="basket__card-title">Стоимость заказа</div>
                                <div className="basket__total-info">
                                    <div className="basket__total-row">
                                        <div className="">Товары({cartCount})</div>
                                        <div className="">{price}с</div>
                                    </div>
                                    <div className="basket__total-row">
                                        <div className="">Доставка</div>
                                        <div className="">Бесплатно</div>
                                    </div>
                                    <div className="basket__total-line"></div>

                                    <div className="basket__total-row ">
                                        <div className="basket__total-bold">Итого</div>
                                        <div className="basket__total-bold red">{price}с</div>
                                    </div>
                                    <button className='basket__total-btn'>Подтвердить заказ</button>
                                    <div className="basket__total-agreement">Подтверждая заказ, я принимаю условия <br /> <a href="#"> пользовательского соглашения</a></div>
                                </div>

                            </div>

                        </div>

                        :

                        <EmptyCart />
                }


            </div>
        </main>
    );
};

export default Basket;