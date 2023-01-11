import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

//config
import { SERVER_API_URL } from '../config';

// model
import Scale from '../models/Scale';

const API_URL = SERVER_API_URL;

type scalesState = {
    scales: Scale[];
    sum: Number;
    status: boolean
};

const initialState: scalesState = {
    scales: [],
    sum: 0,
    status: false
}

const scalesSlice = createSlice({
    name: 'scales',
    initialState: initialState,
    reducers: {
        setScales(state: scalesState, action: PayloadAction<{ scales: Scale[] }>) {
            state.scales = action.payload.scales;
        }
    }
})

export default scalesSlice