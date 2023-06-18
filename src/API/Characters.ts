import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/";

export const getCharacters = async (
    page?: number,
    search?: string
): Promise<data> => {
    return await axios
        .get(search ? `${API_URL}?name=${search}` : `${API_URL}?page=${page}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};
