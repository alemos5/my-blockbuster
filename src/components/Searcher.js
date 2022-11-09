import React, { useState } from 'react'

export const Searcher = ({listState, setListState}) => {

  const [search, setSearch] = useState('');
  const [noFound, setnoFound] = useState(false);
  const characterMinimumForFilter = 1;

  const searchMovie = (e) => {
    //Crete state and update
    setSearch(e.target.value);

    //Filter any coincidences in the array
    let movieFound = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    })

    //Return all 
    setnoFound(false);
    if(search.length <= characterMinimumForFilter || movieFound <= 0){
      movieFound = JSON.parse(localStorage.getItem("movies"));
      setnoFound(true);
    }

    //Update state the list principal with result filter
    setListState(movieFound);

  }

  return (
    <>
        <div className="search">
            <h3 className="title">Searcher: {search}</h3>
            {(noFound && search.length > characterMinimumForFilter ) && (
                <span className='nofoundResult'>No found result</span>
            )}
            
            <form>
                <input type="text"
                  name="search"
                  id="search_field"
                  autoComplete='off'
                  onChange={searchMovie}
                 />
                <button id="search">Buscar</button>
            </form>
        </div>
    </>
  )
}
