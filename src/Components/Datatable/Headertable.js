import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    title:{
      color:'white',
      fontWeight: 'bold'
    }
  
  });
export default function HeaderTable(props){
    const {valuetoorderby , orderdirection, handleRequestsort} = props
    const classes = useStyles();
    const createSortHandler = (property) => (event) => {
        //sending back the property name
        handleRequestsort(event, property)       
    }
    return(
        <TableHead style={{backgroundColor: 'rgb(255, 162, 0)'}}>
          <TableRow >
            <TableCell key='name'>
                <TableSortLabel className={classes.title}
                    active={valuetoorderby === 'name'}
                    direction={valuetoorderby === 'name' ? orderdirection: 'asc'}
                    onClick={createSortHandler('name')}
                >Name</TableSortLabel>
            </TableCell>
            <TableCell  align="left">
                <TableSortLabel className={classes.title}
                    active={valuetoorderby === 'brewery_type'}
                    direction={valuetoorderby === 'brewery_type' ? orderdirection: 'asc'}
                    onClick={createSortHandler('brewery_type')}
                >Brewery Type</TableSortLabel>
            </TableCell>
            <TableCell  align="left">
                <TableSortLabel className={classes.title}
                    active={valuetoorderby === 'city'}
                    direction={valuetoorderby === 'city' ? orderdirection: 'asc'}
                    onClick={createSortHandler('city')}
                >Address</TableSortLabel>
            </TableCell>
            <TableCell align="left">
                <TableSortLabel className={classes.title}
                    active={valuetoorderby === 'phone'}
                    direction={valuetoorderby === 'phone' ? orderdirection: 'asc'}
                    onClick={createSortHandler('phone')}
                >Phone</TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
    )
}