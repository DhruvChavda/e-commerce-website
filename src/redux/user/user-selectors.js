import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
//instead of array individuals as a parameters can also be used
// const selectCurrentUser = createSelector([selectUser,selectCart], (user) => user.currentUser); is same as
// const selectCurrentUser = createSelector(selectUser, selectCart, (user) => user.currentUser);
