import React, { useState } from 'react';

const SectionCatalogItem = ({titleImg, title}) => {
    const [isActive, setIsActive] = useState(false)

    let classInner

    if (isActive){
        classInner = ['catalog__inner-img_hover', 'catalog__inner-img']
    }
    else{
        classInner = ['catalog__inner-img_unHover', 'catalog__inner-img']
    }

    const hoverHendler = () => {
        setIsActive(true)
    }

    const unHoverHendler = () => {
        setIsActive(false)
    }

    return (
        <div onMouseEnter={() => hoverHendler()} onMouseLeave={() => unHoverHendler()} className='catalog__inner'>
            <div className={[...classInner].join(' ')}>
                <img src={titleImg} alt="titleImg" />
            </div>
            <div className="catalog__title">{title}</div>
            <button className="catalog__btn">Купить</button>
        </div>
    );
};

export default SectionCatalogItem;