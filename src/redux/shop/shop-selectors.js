import { createSelector } from "reselect";

// Removed .find and created it as an object
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = (collectionUrlParam) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionUrlParam] : null
    );

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
