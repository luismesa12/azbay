import React, { useState } from 'react'
import { withRouter } from 'react-router';


const SearchBar = ({ history }) => {
    const [searchValue, setSearchValue] = useState("")

    const funPrueba = (e) => {
        e.preventDefault();
        console.log('searchValue:', searchValue);
        history.push('/')
    }

    return (
        <>
            <form onSubmit={funPrueba}>
                <input id="searchInput" type="search" onChange={(e) => { setSearchValue(e.target.value) }} />
                <button  type="submit">search</button>
            </form>
        </>
    )
}

export default withRouter(SearchBar);
