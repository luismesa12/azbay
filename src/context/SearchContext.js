import { createContext, useContext, useEffect, useState } from 'react'
import { useProductContext } from './ProductContext';

export const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);


export const SearchProvider = ({ children }) => {
    const {products} = useProductContext();
    const [searchValue, setSearchValue] = useState("");
    const [productsFound, setProductsFound] = useState([])

    useEffect(() => {
        const tempProductsFound = products.filter((i)=>{
            return i.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        });
        setProductsFound(tempProductsFound)
    }, [products, searchValue]);
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue, productsFound}}>
            {children}
        </SearchContext.Provider>
    )
};

