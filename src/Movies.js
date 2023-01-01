import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from './context';

const Movies = () => {
  const {movie, isLoading} = useContext(AppContext);

  // return (
  //   <div>
  //     {movie.map((curMovie)=>{
  //       return (
  //           <div>
  //             <h2> {curMovie.Title} </h2>
  //           </div>
  //       );
  //     })}
  //   </div>
  // )
  if(isLoading){
    return (
      <div className="">
          <div className="loading">Loading....</div>
      </div>
    );
  }

  return (
    <section  className="movie-page">
      <div className="container grid grid-4-col">
      {movie.map((curMovie)=>{
        const { imdbID, Title, Poster}= curMovie;
        const movieName=Title.substring(0,15);

        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className="card">
            <div className="card-info">
              <h2>{movieName.length>=15? `${movieName}...`: movieName}</h2>
              <img src={Poster} alt={imdbID}/>
            </div>
          </div>
          </NavLink> 
        );
      })}

      </div>
    </section>
  )
}

export default Movies
