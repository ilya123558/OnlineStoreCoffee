import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const dataDiscount = [
    {
        num: 4,
        reviews: 8,
        discount: true,
        acidicLvl: 7,
        bitterLvl: 5,
        saturatedLvl: 6,
        title: 'Colombia Supremo',
        subtitle: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
        toastingLvl: 3,
        card: '',
        id: 1,
        listOptions: [
            {optionValue: 250, price: 250, oldPrice: 350}, 
            {optionValue: 500, price: 500, oldPrice: 650},
            {optionValue: 1000, price: 1000, oldPrice: 1150},
        ]
    },
    {
        num: 3,
        reviews: 8,
        discount: true,
        acidicLvl: 7,
        bitterLvl: 5,
        saturatedLvl: 6,
        title: 'Colombia Supremo',
        subtitle: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
        toastingLvl: 3,
        card: '',
        id: 2,
        listOptions: [
            {optionValue: 250, price: 250, oldPrice: 350}, 
            {optionValue: 500, price: 500, oldPrice: 650},
            {optionValue: 1000, price: 1000, oldPrice: 1150},
        ]
    },
    {
        num: 2,
        reviews: 5,
        discount: true,
        acidicLvl: 3,
        bitterLvl: 5,
        saturatedLvl: 6,
        title: 'Colombia Supremo',
        subtitle: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
        toastingLvl: 3,
        card: '',
        id: 3,
        listOptions: [
            {optionValue: 250, price: 250, oldPrice: 350}, 
            {optionValue: 500, price: 500, oldPrice: 650},
            {optionValue: 1000, price: 1000, oldPrice: 1150},
        ]
    },
    {
        num: 4,
        reviews: 2,
        discount: true,
        acidicLvl: 7,
        bitterLvl: 5,
        saturatedLvl: 6,
        title: 'Colombia Supremo',
        subtitle: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
        oldPrice: '350р',
        toastingLvl: 3,
        card: '',
        id: 4,
        listOptions: [
            {optionValue: 250, price: 250, oldPrice: 350}, 
            {optionValue: 500, price: 500, oldPrice: 650},
            {optionValue: 1000, price: 1000, oldPrice: 1150},
        ]
    },
]



export const fetchRoastedСoffee = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        try {
            // const response = await fetch('')
            // return response.data

            return dataDiscount

        } catch (error) {
            return new Error(error.message)
        }

    }
)

const roastedСoffeeSlice = createSlice({
    name: 'roastedСoffeeSlice',
    initialState: {
        roastedСoffeeCardList: [],
        status: null,
        error: null

    },
    reducers: {
        updateRoastedСoffeePrice: (state, action) => {
            const roastedСoffeeCard = state.roastedСoffeeCardList[0].find(elem => elem.id === action.payload.id)
            roastedСoffeeCard.price = action.payload.price
            if (action.payload.oldPrice) {
                roastedСoffeeCard.oldPrice = action.payload.oldPrice
            }
        }
    },
    extraReducers: {
        [fetchRoastedСoffee.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchRoastedСoffee.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.roastedСoffeeCardList.push(action.payload)
        },
        [fetchRoastedСoffee.rejected]: (state, action) => {
            state.error = action.payload
        }
    }


})

export const { updateRoastedСoffeePrice, addRoastedСoffeeItems } = roastedСoffeeSlice.actions

export default roastedСoffeeSlice.reducer