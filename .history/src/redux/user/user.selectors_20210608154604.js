import {createSelector} from 'reselect'

const selectUser = state => state.user
cpmst selectCart = state => state.cart

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)