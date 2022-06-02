import React from 'react';
import MyCoffee from '../UI/coffee/MyCoffee';
import './SectionTop.scss'
import vector from '../../images/UI/vector.png';

const SectionTop = () => {
    return (
        <section className="section-top">
            <img className="vector" src={vector} alt="vector" />
            <div className="container">
                <MyCoffee className='section-top__coffee'/>
                <div className="section-top__content">
                    <h1 className="section-top__title">Свежеобжаренный кофе</h1>
                    <p className="section-top__text">
                        Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.

                        Мы обжариваем кофе <span>каждые выходные</span>.
                    </p>
                    <button className="section-top__btn">
                        Посмотреть каталог
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SectionTop;