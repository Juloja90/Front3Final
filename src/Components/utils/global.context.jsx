import { createContext, useMemo, useReducer, useEffect } from "react";

export const initialState = { 
  theme: localStorage.getItem("theme") || "light", 
  data: [],
  favorites: JSON.parse(localStorage.getItem("Favorites")) || [],
};

const actionTypes = {
  SET_THEME: 'SET_THEME',
  ADD_DATA: 'ADD_DATA',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      localStorage.setItem('theme', action.payload);
      return { ...state, theme: action.payload };

    case actionTypes.ADD_DATA:
      return { ...state, data: [...state.data, action.payload] };

    case actionTypes.ADD_FAVORITE:
      if (!state.favorites.some(fav => fav.id === action.payload.id)) {
        const updatedFavorites = [...state.favorites, action.payload];
        localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
        return { ...state, favorites: updatedFavorites };
      }
      return state;

      case actionTypes.REMOVE_FAVORITE: {
        const updatedFavorites = state.favorites.filter(fav => fav.id !== action.payload);
        localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
        return { ...state, favorites: updatedFavorites };
      }
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState);

  useEffect(() =>{
    if (state.theme === "dark"){
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else{
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [state.theme]);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
