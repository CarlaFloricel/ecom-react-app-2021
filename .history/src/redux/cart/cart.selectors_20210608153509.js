import {createSelector} from 'reselect'

const selectCart = state => state.createSelector
const selectUser = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart => cart.cartItems)
)