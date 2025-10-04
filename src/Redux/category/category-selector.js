import { createSelector } from "reselect";

const selectCategory = state => state.category;

export const selectCategorySection = createSelector(
    [selectCategory],
    category => category.sections
)

export const selectCollections = createSelector(
    [selectCategory],
    collection => collection.collections
)

// export const selectCollectionForPreview = collectionUrlParam => createSelector(
//     [selectCollections],
//     collection => collection[collectionUrlParam]
// )

export const categoryByProduct = createSelector(
    [selectCategory],
    categoryState => categoryState.categoryByProduct
)