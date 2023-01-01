import React, { useEffect, useState } from 'react';

 const AppContext = React.createContext();
 
//  const API_URL= 'https://www.omdbapi.com/?apikey=6346d5ef&s=titanic';
export const API_URL= 'https://www.omdbapi.com/?apikey=6346d5ef';


// created a porvider function
 const AppProvider = ({children}) => {
     
    //to send the data fetched to the Movie folder
    const [isLoading, setIsLoading]= useState(true);
    const [movie, setMovie]= useState([]);
    const [isError, setIsError]= useState({show: "false", msg: ""});
    const [query, setQuery]= useState("titanic");

    const getMovies = async (url) =>{
        setIsLoading(true);
        
        try{
            const res= await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response=== "True"){
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: "",
                });
                setMovie(data.Search);
            }
            else{
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        let timerOut= setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        }, 500)
    
    return ()=> clearTimeout(timerOut);
    }, [query]);

    //[query] bcoz it needs to update when the query is upadted every time , if 
    // its empty it will update only for the first time

    return <AppContext.Provider value={ {isLoading, isError, movie, query, setQuery}}>
        {children}
    </AppContext.Provider>
 };

 export {AppContext, AppProvider};
