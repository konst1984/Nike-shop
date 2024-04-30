import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { IShoeCart } from '@/app/types/interfaces'

const isTrue= <T extends {id: string, selectedSize: number, color: string}>(item: T, action: PayloadAction<T>):boolean => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.color === action.payload.color

interface ICartSlice {
  cartItems: IShoeCart[]
}

const initialState: ICartSlice = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,  action: PayloadAction<IShoeCart>) => {
      const isExist = state.cartItems.some((item) => isTrue<IShoeCart>(item, action))
      const item = state.cartItems.find((item) => isTrue<IShoeCart>(item, action))
      if(isExist && item) {
        item.quantity +=1
        item.totalPrice = item.quantity * item.price
      }
      else state.cartItems.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<IShoeCart>) => {
      state.cartItems = state.cartItems.filter((item) => !isTrue(item,action))
    },
    updateCartItem: (state, action: PayloadAction<IShoeCart>) => {

      const isExist = state.cartItems.some((item) => isTrue(item,action))
      let item = state.cartItems.find((item) => isTrue(item,action))
      if(isExist && item) {
        item = action.payload
      }
    },
    clearCart: (state) => {
      state.cartItems = []
    }
  },
})

export const { addToCart, clearCart, updateCartItem,removeFromCart } = cartSlice.actions

export const totalPriceCart = (state: RootState): number => state.cart.cartItems.reduce((total, item) => total + item.totalPrice, 0)

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.procy.value
const cartReducer = cartSlice.reducer
export default cartReducer;