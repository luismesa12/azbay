import React from 'react'
import Button from '@material-ui/core/Button'

const FilterIndicator = ({ view,  searchValue, whCategory, whRange,whSort, setSearchValue}) => {
    return (
        <div>
            {view.list&&'vis ta lista '}
            {view.gallery&&'galeria vista'}
            busqueda: {searchValue}
            {whRange}
            {whSort}
            {whCategory}
            <Button variant="text" size='small' color="secondary" onClick={()=>setSearchValue('')}>
              X Borrar Filtros
            </Button>
        </div>
    )
}

export default FilterIndicator;
