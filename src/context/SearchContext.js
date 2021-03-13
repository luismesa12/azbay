import { createContext, useContext, useState } from 'react'

export const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);


export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
};

