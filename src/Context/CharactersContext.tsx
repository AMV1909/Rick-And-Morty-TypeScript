import { ReactNode, createContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { getCharacters } from "../API/Characters";

export const CharactersContext = createContext({
    getData: (page: number): Promise<void> => Promise.resolve(),
    characters: [] as character[],
    page: 1,
    setPage: (page: number) => {},
    maxPage: 0,
    loading: false,
    searchCharacters: debounce(
        async (search: string): Promise<void> => Promise.resolve(),
        1000
    ),
    goTo: true,
    getCharacterById: (id: number): character | undefined => undefined,
});

export function CharactersContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [characters, setCharacters] = useState<character[]>([]);
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(0);
    const [goTo, setGoTo] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async (page: number): Promise<void> => {
        await getCharacters(page).then((data: data) => {
            setCharacters(data.results);
            setMaxPage(data.info.pages);
            setLoading(false);
        });
    };

    useEffect(() => {
        getData(page);
    }, [page]);

    const searchCharacters = async (search: string): Promise<void> => {
        if (search.trim() !== "") {
            setGoTo(false);
            setLoading(true);

            await getCharacters(undefined, search)
                .then((data: data) => {
                    setCharacters(data.results);
                    setLoading(false);
                })
                .catch(() => {
                    setCharacters([]);
                    setLoading(false);
                });
        } else {
            setGoTo(true);
            setLoading(true);
            setPage(1);

            getCharacters(page).then((data: data) => {
                setCharacters(data.results);
                setMaxPage(data.info.pages);
                setLoading(false);
            });
        }
    };

    const debounceSearchCharacters = debounce(searchCharacters, 1000);

    const getCharacterById = (id: number): character | undefined => {
        return characters.find((character: character) => character.id === id);
    };

    return (
        <CharactersContext.Provider
            value={{
                getData,
                characters,
                page,
                setPage,
                maxPage,
                loading,
                searchCharacters: debounceSearchCharacters,
                goTo,
                getCharacterById,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
}
