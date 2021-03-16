import { withRouter } from 'react-router';
import { useSearchContext } from '../../context/SearchContext';


const SearchBar = ({ history }) => {
    const {searchValue, setSearchValue} = useSearchContext();
    const goHome = (e) => {
        e.preventDefault();
        history.push('/items')
    };

    return (
        <>
            <form onSubmit={goHome}>
                <input id="searchInput" type="search" onChange={(e) => { setSearchValue(e.target.value) }} />
                <button  type="submit">search</button>
            </form>
        </>
    )
}

export default withRouter(SearchBar);
