import React, { useEffect } from 'react';
import RoastedСoffeeSorts from './roastedСoffeeSorts/RoastedСoffeeSorts'
import s from './RoastedСoffeeSort.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { activeValueRoastedСoffee } from '../../../redux/sort/sortRoastedСoffee'

const RoastedСoffeeSort = () => {

    const dispatch = useDispatch()
    const sortItemsList = useSelector(state => state.sortRoastedСoffee.sortItems)
    const sortItems = sortItemsList.filter(elem => elem.title !== 'Степень обжарки')
    const sortItem = sortItemsList.filter(elem => elem.title === 'Степень обжарки')[0]

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const onClickDegreeHandler = (index) => {
        dispatch(activeValueRoastedСoffee({ title: sortItem.title, index }))
    }

    console.log(sortItem.sortValue)

    return (
        <section>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.degree}>
                        <div className={s.degreeInner}>
                            <div className={s.border}></div>
                            <div>
                                <h4 className={s.degreeText}>Степень обжарки</h4>
                                <ul>
                                    {
                                        sortItem.sortValue.map((elem, index) => {
                                            return (
                                                <li key={index}>
                                                    <div onClick={() => onClickDegreeHandler(index)} className={sortItem.activeValue === index ? s.active : ''}></div>
                                                    {elem.coffee}
                                                </li>)
                                        })
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={s.sortIneer}>
                        <div className={s.borderTop}></div>
                        {
                            sortItems.map(elem => {
                                return <RoastedСoffeeSorts key={elem.title} title={elem.title} />
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoastedСoffeeSort;