import { createSlice } from "@reduxjs/toolkit";
import findCoffee from '../../utils/findCofee'

const sortRoastedСoffee = createSlice({
    name: 'roastedСoffeeSlice',
    initialState: {
        sortItems: [
            {
                title: 'Степень обжарки', sortValue: [
                    { coffee: findCoffee(5) },
                    { coffee: findCoffee(4) },
                    { coffee: findCoffee(3) },
                    { coffee: findCoffee(2) },
                    { coffee: findCoffee(1) },
                ], activeValue: null
            },

            { title: 'География', sortValue: ['Африка', 'Йемен', 'Уганда', 'Эфиопия', 'Азия', 'Центр. Америка', 'Лат. Америка'], activeValue: null },
            { title: 'Кислинка', sortValue: ['Низкая', 'Средняя', 'Высокая'], activeValue: null },
            { title: 'Особые', sortValue: ['Популярное', 'Новый урожай', 'Ваш выбор', 'Микролот', 'Сорт недели', 'Скидки', 'Новинка'], activeValue: null },
            { title: 'Вид кофе', sortValue: ['Арабика', 'Робуста', 'Смесь арабик', 'Смесь арабика/робуста'], activeValue: null },
        ]
    },
    reducers: {
        activeValueRoastedСoffee: (state, action) => {
            if (action.payload.title !== 'Степень обжарки') {
                const sortItem = state.sortItems.filter(elem => elem.title === action.payload.title)
                sortItem[0].activeValue = action.payload.index
            }
            else{
                const sortItem = state.sortItems.filter(elem => elem.title === action.payload.title)
                sortItem[0].activeValue = action.payload.index
                console.log(state.sortItems.filter(elem => elem.title === action.payload.title)[0].activeValue)
            }

        },
    },

})

export const { activeValueRoastedСoffee } = sortRoastedСoffee.actions

export default sortRoastedСoffee.reducer



