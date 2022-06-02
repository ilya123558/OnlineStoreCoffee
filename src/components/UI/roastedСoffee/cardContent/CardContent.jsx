import React from 'react';
import './CardContent.scss'
import MyCardItem from './MyCardItem';
import card from '../../../../images/section-discount/image.png'
import findRating from '../../../../utils/findRating'
import findToasting from '../../../../utils/findToasting'
import findLvl from '../../../../utils/findLvl'


const CardContent = (props) => {

    // console.log('-', obj)
    const stars = findRating(props.num)
    const acidic = findLvl(props.acidicLvl)
    const bitter = findLvl(props.bitterLvl)
    const saturated = findLvl(props.saturatedLvl)
    const toasting = findToasting(props.toastingLvl)


    return (
        <div className="card__content">
            <div className="card__img">
                <img src={card} alt="card" />
            </div>
            <div className="card__content-body">
                <div className="rating">
                    <div className="rating-stars">
                        {
                            stars.map((elem, index) => {
                                return (
                                    <div key={index} >{elem}</div>
                                )
                            })
                        }
                    </div>
                    <div className="account"><h4>{props.num}.0</h4> <span>({props.reviews} отзыва)</span></div>
                </div>
                <div className="coffee">
                    {
                        toasting.map((elem, index) => {
                            return (
                                <div key={index} >{elem}</div>
                            )
                        })
                    } 
                </div>
                <MyCardItem title='Кислинка' mass={acidic} />
                <MyCardItem title='Горчинка' mass={bitter} />
                <MyCardItem title='Насыщенность' mass={saturated} />
            </div>
        </div>
    );
};

export default CardContent;