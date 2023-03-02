import React from 'react';

const Import = () => {
    return (
        <div className='input'>
            <div className="input__box">
                <h1 className="input__head">Импорт склада с Excel</h1>
                <div className="input__body">
                    <div className="input__info">
                        <div className="input__info-left">
                            <h2>Инструкция по импорту</h2>
                            <p>Файл должен быть без заголовок во всех загрузках</p>
                        </div>
                        <p className='input__info-right'>Скачать пример</p>
                    </div>
                    <input type="text" />
                    <div className="input__btns">
                        <button>Импорт</button>
                        <button>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Import;