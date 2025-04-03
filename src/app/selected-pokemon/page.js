"use client";
import React from 'react'
import { useSelector } from 'react-redux'

export default function SelectedPokemon() {
    const pokemon = useSelector((state) => state.pokemon);
    console.log(pokemon);
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 text-xl font-bold text-blue-600">
            {pokemon ? (
                <div>
                    <h1 className="text-3xl text-blue-800 uppercase">{pokemon.name}</h1>
                    <p className="text-lg text-gray-700">Name: {pokemon.name}</p>
                    <p className="text-lg text-gray-700">Weight: {pokemon.weight}</p>
                </div>
            ) : (
                <p>No Pokémon selected</p>
            )}
        </div>
    )
}
