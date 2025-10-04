import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce(
//         (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
//     )
// )

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => Array.isArray(cartItems)
        ? cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              accumalatedQuantity + cartItem.quantity, 0
          )
        : 0
);


export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.price * cartItem.quantity, 0
    )
)
