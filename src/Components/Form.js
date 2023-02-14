import React, { useContext } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { dataContext } from '../dataContext'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Form(props) {
  const {datas, fetch, value} = props
  //unique the value to show in dropdown
    const arrayUniqueByKey = [...new Map(datas.map(item =>
      [item[fetch], item])).values()];
  
    const {query, setQuery} = useContext(dataContext)
    const classes = useStyles(); 
    //update query in order as state-city-name
    const handleChange = (event) => {
      switch(fetch){
        case 'state':
          return setQuery(setQuery => ({...setQuery,state:event.target.value,city:'',name:''}));
        case 'city':
          return setQuery(setQuery => ({...setQuery,city:event.target.value,name:''}));
        case 'name':
          return setQuery(setQuery => ({...setQuery,name:event.target.value}));
        default:
          return null
      } };
    
    return (
        <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">{fetch}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value= {value}
          onChange={handleChange}
          label={fetch}
        >
          
          
          {arrayUniqueByKey.map((data) =>
            <MenuItem value={data[fetch]} key={data.id}>
              {data[fetch]}
            </MenuItem>
          )}
         
        </Select>        
        </FormControl>
    )
}

export default Form
