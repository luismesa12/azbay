import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();
export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
    const lsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const [favorites, setFavorites] = useState(lsFavorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    function addToFavorites(item) {
        if (favorites.length) {
            if (indexInFavorites(item) >= 0) {
                let temp = [...favorites]
                setFavorites(temp)
            }
            else {
                setFavorites([...favorites, item])
            }
        }
        else {
            setFavorites([item])
        }
    };
    function removeFromFavorites(item) {
        let temp = [...favorites]
        temp.splice(indexInFavorites(item), 1);
        setFavorites(temp);
    };

    const indexInFavorites = item => favorites.findIndex(i => i.id === item.id);

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, indexInFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
};
