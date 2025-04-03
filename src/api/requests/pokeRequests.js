import { pokeAPI } from "../pokeApi";

const APIinstance = new pokeAPI();

export const getPokemon = async (name) => {
    try {
        const response = await APIinstance.instance.get(
            `${APIinstance.APIBaseURL}pokemon/${name}`
        )
        return response;
    } catch (error) {
        console.log(error);
    }
}