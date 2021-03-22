import { withRouter } from 'react-router';
import { useSearchContext } from '../../context/SearchContext';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';

const SearchBar = ({ history }) => {
    const { searchValue, setSearchValue } = useSearchContext();
    const goHome = (e) => {
        e.preventDefault();
        history.push('/')
    };

    return (
        <>
    <Box px={1}>
    <form onSubmit={goHome}>
                <TextField
                    fullWidth
                    type="search"
                    label="Buscar..."
                    id="searchInput"
                    variant="outlined"
                    size="small"
                    onChange={(e) => { setSearchValue(e.target.value) }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton size="small" aria-label="search" type="submit">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
    </Box>
            
        </>
    )
}

export default withRouter(SearchBar);
