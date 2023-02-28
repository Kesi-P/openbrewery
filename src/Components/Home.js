import React, { useState, useEffect } from "react";
import Form from '../Components/Form'
import Datatable from '../Components/Datatable/Datatable'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography';
import { dataContext } from '../dataContext'
import { useSelector, useDispatch } from "react-redux";
import { srtBrew, srtName, srtState,srtCity } from '../Redux/brewActions'
import Navbar from '../Components/Navbar'

function Home() {
  const [query, setQuery] = useState({name:'',city:'',state:''})
  const [loading,setloading] = useState(false)
  const fetchData = useSelector((state) => state)
  const dispatch = useDispatch();
  
  //fetching all the data at first
  useEffect(() => {
    setloading(true)
    dispatch(srtBrew())
    setloading(false);
  }, [dispatch]);
  
  //fetch data depends on searching
  useEffect(() => {
    setloading(true)
    if(query.state){
      dispatch(srtState(`?by_state=${query.state}`))
    }
    if(query.city !== ''){
      dispatch(srtCity(`?by_state=${query.state}&by_city=${query.city}`))
    }
    if(query.name !== ''){
      dispatch(srtName(`?by_state=${query.state}&by_city=${query.city}&by_name=${query.name}`))
    }
    setloading(false);
  }, [dispatch, query]);
  
  return (
    <div className='appbody'>
    <Navbar />
    <div className="App">      
      <header className="App-header">
      <Typography variant="h3" gutterBottom style={{color:'#fb0'}}>
        Welcome to Open Brewery DB
      </Typography>
        <div>
        {/* passing the data to display dropdown */}
        <dataContext.Provider value={{ query, setQuery }}>        
          {/* {query && <Form datas={fetchData.allBrew} fetch={'country'} />} */}
          {query && <Form datas={fetchData.allState} fetch={'state'} value={query.state} />}
          {query && <Form datas={fetchData.allCity} fetch={'city'} value={query.city} />}
          {query && <Form datas={fetchData.allName} fetch={'name'} value={query.name} />}
        </dataContext.Provider>
        </div>
      </header>
      {/* display datatable */}
      { (loading) ?  <LinearProgress /> : <Datatable props={fetchData.allName} /> }
    </div>
    </div>
  );
}

export default Home;
