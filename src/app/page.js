"use client";
import Image from "next/image";
import { useState } from "react";

import { getPokemon } from "@/api/requests/pokeRequests";
import { setPokemonName, setPokemonWeight } from '@/lib/features/pokemonSlice';
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    getPokemon(name).then(
      (response) => {
        if (response) {
          dispatch(setPokemonName(response.data.name));
          dispatch(setPokemonWeight(response.data.weight));
          console.log(response)
        } else {
          console.log("Error: ", response)
        }
      }
    )
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-50 text-gray-800">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          action=""
          method="get"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="pokemonName"
              className="text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="pokemonName"
              onChange={(e) => setName((e.target.value).toLowerCase())}
              placeholder="Enter Pokémon name"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Enviar
          </button>
          <Link
            href="/selected-pokemon"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
          >
            Check Pokémon stats
          </Link>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
