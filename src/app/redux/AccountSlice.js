import { createSlice } from '@reduxjs/toolkit';
export const GET_ACCOUNT_LIST = 'getAccountList';

const accountSlice = createSlice({
    name: 'account',
    initialState: [],
    reducers: {
        getAccountList: (state, action) => {
            state = action.payload;
        },
    },
});
export default accountSlice;
