import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    from: string;
    to: string;
    dateFrom: string;
    dateTo: string;
    searchValue: string;
}

const initialState: IState = {
    from: '',
    to: '',
    dateFrom: '',
    dateTo: '',
    searchValue: '',
};

const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setFrom(state, action: PayloadAction<string>) {
            state.from = action.payload;
        },
        setTo(state, action: PayloadAction<string>) {
            state.to = action.payload;
        },
        setDateFrom(state, action: PayloadAction<string>) {
            state.dateFrom = action.payload;
        },
        setDateTo(state, action: PayloadAction<string>) {
            state.dateTo = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        clearDates(state) {
            state.from = '';
            state.to = '';
            state.dateFrom = '';
            state.dateTo = '';
            state.searchValue = '';
        },
    },
});

export const {
    setFrom,
    setTo,
    setDateFrom,
    setDateTo,
    clearDates,
    setSearchValue,
} = ticketSlice.actions;

export default ticketSlice.reducer;
