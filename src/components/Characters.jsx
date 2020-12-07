import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import useCharacters from "../hooks/useCharacters";
import Search from "./Search";
import "../assets/css/Characters.css";

const initialState = {
  favorites: [],
};
const API = "https://rickandmortyapi.com/api/character";
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

const Characters = () => {
  //const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  /*const getData = async () => {
    let API = "https://rickandmortyapi.com/api/character";
    let res = await fetch(API);
    let data = await res.json();
    setCharacters(data.results);
  };
  useEffect(() => {
    getData();
  }, []);*/

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  /*const handleSearch = () => {
    //setSearch(e.target.value);
    setSearch(searchInput.current.value);
  };*/

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  /* const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  }); */

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="characters container mx-auto">
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <section className="mb-10">
        <div className="flex">
          <div className="flex-grow h-16 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center">
            <h1>Fovoritos</h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          {favorites.favorites.map((character) => (
            <div
              key={character.id}
              className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
            >
              <div className="mb-10">
                <div className="text-center">
                  <img
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    src={character.image}
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="pt-6 text-center">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {character.name}
                  </div>
                  <button
                    type="button"
                    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                    onClick={() => handleClick(character)}
                  >
                    Add Favorite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex mb-5">
        <div className="flex-grow h-16 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center">
          <h1>Lista de personajes</h1>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredUsers.map((character) => (
          <div
            key={character.id}
            className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
          >
            <div className="mb-10">
              <div className="text-center">
                <img
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  src={character.image}
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="pt-6 text-center">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {character.name}
                </div>
                <button
                  type="button"
                  className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                  onClick={() => handleClick(character)}
                >
                  Add Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
