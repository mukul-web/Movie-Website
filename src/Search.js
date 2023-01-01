import React,{useContext} from 'react'
import { AppContext } from './context';

const Search = () => {

  const{query, setQuery, isError}= useContext(AppContext);

  return (
    <div>
      <section className="search-section">
      <h2 className="ss">Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e)=> e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
     </section> 
    </div>
  )
  
  
}

export default Search
