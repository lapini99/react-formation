import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './features/pokemonSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        pokemon: pokemonReducer,
    }
  })
}