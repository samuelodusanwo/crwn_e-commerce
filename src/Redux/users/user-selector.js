import { createSelector } from 'reselect';

const selectUser = state => state.user

export const selectedUser = createSelector(
    [selectUser],
    user => user.currentUser
)