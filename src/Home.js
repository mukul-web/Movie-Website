import React from 'react'
//import {AppContext} from "./context";
import Movies from './Movies';
import Search from './Search';

const Home = () => {
  //to get the data from context API (warehouse)
  //const name= useContext(AppContext);
  
    return (
    <>
      <Search/>
      <Movies/>
    </>
  )
};
export default Home;
