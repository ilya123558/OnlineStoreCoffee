import React from 'react';
import './CardAdd.scss'

const CardAdd = (props) => {

    return (
        <div className="card__add">
            <h3 className="card__title">{props.title}</h3>
            <p className="card__subtitle">{props.subtitle}</p>
            <div className="card__add_inner">
                {props.discount
                    ?
                    <div className="card__price card__price-active">
                        <p>{props.price ? props.price : props.listOptions[0].price}</p>
                        <div className="card__price-old">{props.oldPrice ? props.oldPrice : props.listOptions[0].oldPrice}</div>
                    </div>
                    :
                    <div className="card__price">{props.price ? props.price : props.listOptions[0].price}</div>
                }
                <button className="card__price_btn">В корзину</button>
            </div>
        </div>
    );
};

export default CardAdd;