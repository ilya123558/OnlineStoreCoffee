import React from 'react';
import './SectionCatalog.scss'
import coffee from '../../images/section-catalog/coffee.png'
import goodEat from '../../images/section-catalog/good-eat.png'
import prod from '../../images/section-catalog/prod.png'
import tea from '../../images/section-catalog/tea.png'
import cafe from '../../images/section-catalog/cafe.png'
import vector2 from '../../images/section-catalog/vector2.png'
import SectionCatalogItem from './sectionCatalogItem/SectionCatalogItem';

const SectionCatalog = () => {
    
    return (
        <section className="section-catalog">
            <img src={vector2} alt="vector2" className="section-catalog__vector2" />
            <img src={cafe} alt="cafe" className="section-catalog__cafe" />
            <div className="container">
                <h2 className="section-catalog__title">Каталоги нашей продукции</h2>
                <div className="catalog">


                    <SectionCatalogItem titleImg={coffee} title='Свежеобжаренный кофе' />
                    <SectionCatalogItem titleImg={tea} title='Чай и кофейные напитки' />
                    <SectionCatalogItem titleImg={prod} title='Продукция для вендинга' />
                    <SectionCatalogItem titleImg={goodEat} title='Здоровое питание' />
                </div>
            </div>
            

        </section>
    );
};

export default SectionCatalog;