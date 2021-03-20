import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import FavoriteWidget from '../FavoriteWidget';
import SearchBar from '../SearchBar';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import WeekendIcon from '@material-ui/icons/Weekend';
import Box from '@material-ui/core/Box';
import ViewListIcon from '@material-ui/icons/ViewList';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuItem:{
        '&:hover':{
            color:'inherit',
            textDecoration: 'none'
        },
    },
    title: {
        flexGrow: 1,
        '&:hover':{
            color:'inherit',
            textDecoration: 'none'
        },
    },
    widget: {
        marginRight: theme.spacing(2),
    },
    searchBar:{
        flexGrow: 0.5,
        marginRight: theme.spacing(2),
    },

}));

function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' color="inherit">
                <Toolbar>
                    <div>
                        <IconButton aria-controls="simple-menu" color='inherit' aria-haspopup="true" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem className={classes.menuItem} onClick={handleClose} to='/' component={NavLink}><Box px={1}><WeekendIcon/></Box>Kandra</MenuItem>
                            <MenuItem className={classes.menuItem} onClick={handleClose} to='/items' component={NavLink} ><Box px={1}><ViewListIcon/></Box>Productos</MenuItem>
                            <MenuItem className={classes.menuItem} onClick={handleClose} to='/contact' component={NavLink} ><Box px={1}><ContactMailIcon/></Box>Contacto</MenuItem>
                        </Menu>
                    </div>
                    <Typography variant="h6" className={classes.title} to='/' component={NavLink} color='inherit'>
                        Muebles Kandra
                    </Typography>
                    <Box className={classes.searchBar}>

                    <SearchBar />
                    </Box>
                    <NavLink to='/myFavorites' className={classes.widget}>
                        <FavoriteWidget />
                    </NavLink>
                    <NavLink to='/carrito' className={classes.widget}>
                        <CartWidget />
                    </NavLink>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    );
}

export default NavBar;
