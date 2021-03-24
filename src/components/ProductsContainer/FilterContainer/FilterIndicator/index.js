import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { Box, Grid, Typography } from '@material-ui/core';

const FilterIndicator = ({ setWhSort, setwhRange, view, searchValue, whCategory, whRange, whSort, setSearchValue, setView, setwhCategory, }) => {

    const clearfilters = () => {
        (() => setSearchValue(''))();
        (() => setView({ list: false, gallery: true }))();
        (() => setwhCategory('All'))();
        (() => setwhRange([false, false]))();
        (() => setWhSort(''))();
    };
    useEffect(() => {
        (() => setView({ list: false, gallery: true }))();
        (() => setwhCategory('All'))();
        (() => setwhRange([false, false]))();
        (() => setWhSort(''))();
    }, [searchValue])

    return (
        <Box m={2}>
            <Grid container spacing={1} justify="space-between" alignItems="center" align='center'>
                {searchValue &&
                    <Grid item xs={12} lg={2}>
                        <Typography variant="subtitle2" color="primary">Búsqueda: {searchValue}</Typography>
                    </Grid>
                }

                <Grid item xs={12} lg={3}>
                    {
                        <Typography variant="subtitle2" color="primary">Categoria: 
                        {whCategory=='All'&&' Todos'}
                        {whCategory=='AAA'&&' Sillas'}
                        {whCategory=='BBB'&&' Sofás'}
                        {whCategory=='CCC'&&' Camas'}
                        </Typography>
                    }
                </Grid>

                {whRange[1] &&
                    <Grid item xs={12} lg={3}>
                        <Typography variant="subtitle2" color="primary">Precio min: ${whRange[0]} Precio max: ${whRange[1]}</Typography>
                    </Grid>
                }

                {whSort &&
                    <Grid item xs={12} lg={2}>
                        <Typography variant="subtitle2" color="primary">Orden: {whSort === 'ascending' && 'Menor Precio'}{whSort === 'descending' && 'Mayor Precio'}</Typography>
                    </Grid>
                }

                <Grid item xs={12} lg={2}>
                    <Button variant="text" size='small' color="secondary" onClick={clearfilters}>
                        X Borrar Filtros
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FilterIndicator;
