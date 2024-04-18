import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { IShoesCart } from '@/app/types/interfaces'

// Define a type for the slice state
interface ICartSlice {
  cartItems: IShoesCart[]
}

// Define the initial state using that type
const initialState: ICartSlice = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,  action: PayloadAction<IShoesCart>) => {
      const isExist = state.cartItems.some((item) => item.id === action.payload.id && item.size === action.payload.size)
      const item = state.cartItems.find((item) => item.id === action.payload.id && item.size === action.payload.size)
      if(isExist && item) {
        item.quantity +=1
        // state.cartItems = state.cartItems.map((item) => item.id === action.payload.id && item.size === action.payload.size ? {...item, quantity: item.quantity + 1} : item)
      }
      else state.cartItems.push(action.payload)
    },
    decrement: (state) => {
      state.cartItems = []
    },
    incrementByAmount: (state, action: PayloadAction<any>) => {
      state.cartItems = []
    },
  },
})

export const { addToCart, decrement, incrementByAmount } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.procy.value
const cartReducer = cartSlice.reducer
export default cartReducer;