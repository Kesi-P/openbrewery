import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import HeaderTable from './Headertable';
import Modalpopup from '../Modalpopup'

function descendingComparator(a, b, orderBy) {
  //compare orderBy
  //asc
  if(b[orderBy] < a[orderBy]){
    return -1
  }
  //desc
  if(b[orderBy] > a[orderBy]){
    return 1
  }
  return 0
}
//return function
function getComparator(order, orderBy){
  return order === 'desc'
  ? (a, b) => descendingComparator(a, b, orderBy)
  : (a, b) => -descendingComparator(a, b, orderBy)
}
const sortedRowinformation = (rowArray, comparator) =>{
   // temporary array holds objects with position and sort-value
  const stabilizationRowArray = rowArray.map((el, index) => [el, index])
  // sorting the mapped array containing the reduced values
  stabilizationRowArray.sort((a,b) => {
    //passing items to compare descendingComparator(a, b, orderBy)
    const order = comparator(a[0], b[0])
    if(order !== 0) 
      return order
    //sort() expects a value to be returned at the end of arrow function.
    return a[1] - b[1]
  })
  return stabilizationRowArray.map((el) => el[0])
}

export default function Datatable({props}) {
  const [orderdirection, setOrderdirection] = useState('asc')
  const [valuetoorderby, setValuetoorderby] = useState('name')
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);

  //data modal popup
  const handleOpen = (row) => {
    setData(row)
    setOpen(true);
  };
  const handleClose = (event, property) => {    
    (property === 'close' ? setOpen(false) : setOpen(true))
  };
  const handleRequestsort = (event, property) => {
    const isAscending = (valuetoorderby === property && orderdirection === 'asc')
    setValuetoorderby(property)
    setOrderdirection(isAscending ? 'desc' : 'asc')
  }
  return (
    <>
    <TableContainer>
      <Table>
        <HeaderTable 
        valuetoorderby={valuetoorderby}
        orderdirection={orderdirection}
        handleRequestsort={handleRequestsort}
        />
        {
          sortedRowinformation(props, getComparator(orderdirection, valuetoorderby))
          .map((row, index) => (
            <TableRow key={index} onClick={() => handleOpen(row)}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.brewery_type}</TableCell>
              {/* will be sorted by city name */}
              <TableCell align="left">{row.address_2}{` `}{row.address_3}{` `}{row.street}{` `}{row.city}
              {` `}{row.state}{` `}{row.country}{` `}{row.postal_code}
              </TableCell>
              <TableCell align="left">{row.phone}</TableCell>
            </TableRow>
            
          ))
        }
        <Modalpopup open = {open} handleClose={handleClose} data={data}/>
      </Table>
    </TableContainer>
    </>
  );
}