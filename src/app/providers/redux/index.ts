import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ticketsReducer from '../../../entities/tickets/lib/ticketSlice';

const rootReducer = combineReducers({
    tickets: ticketsReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
