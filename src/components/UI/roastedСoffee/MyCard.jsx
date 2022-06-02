import React from 'react';
import './MyCard.scss'
import CardSelect from './cardSelect/CardSelect';
import CardContent from './cardContent/CardContent';
import CardAdd from './cardAdd/CardAdd';

const MyCard = (props) => {

    return (
        <div className={props.discount ? 'card card_active' : 'card'}>
            <CardSelect id={props.id} listOptions={props.listOptions} discount={props.discount} />
            <CardContent {...props} />
            <CardAdd {...props} />
        </div>
    );
};

export default MyCard;