import { createSelector } from "reselect";


const storeSelector = state => state.store

export const selectStoreSection = createSelector(
    [storeSelector],
    store => store.stores
)

export const selectCollectionSection = createSelector(
    [storeSelector],
    collection => collection.collections
)

export const selectUserShop = createSelector(
    [storeSelector],
    shop => shop.userShop
)