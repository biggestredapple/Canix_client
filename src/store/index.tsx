import {
    AnyAction,
    combineReducers,
    configureStore,
    Reducer
} from '@reduxjs/toolkit';

// slices
import scalesSlice from './scales-slice';

const combinedReducer = combineReducers({
    scales: scalesSlice.reducer
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (
    state: ReturnType<typeof store.getState>,
    action: AnyAction
) => {
    return combinedReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer
});

export default store;