import axios from "axios"

export class pokeAPI {
    APIBaseURL = "https://pokeapi.co/api/v2/"; //URL que todas las queries tendrán en común

    instance = axios.create({ //creamos la instancia de axios
        baseURL: `${this.APIBaseURL}`,
        timeout: 20000,
        headers: {
            "Content-Type":"application/json"
        }
    })
}