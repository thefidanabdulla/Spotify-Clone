import {configureStore} from '@reduxjs/toolkit';
import playerReducer from './player'

export const store = configureStore({
    reducer:{
        player: playerReducer
    }
})