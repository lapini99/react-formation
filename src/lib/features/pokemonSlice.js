import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  weight: '',
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonName(state, action) {
      state.name = action.payload;
    },
    setPokemonWeight(state, action) {
      state.weight = action.payload;
    },
    clearPokemonName(state) {
      state.name = '';
    },
  },
});

export const { setPokemonName, setPokemonWeight, clearPokemonName } = pokemonSlice.actions;

export default pokemonSlice.reducer;
