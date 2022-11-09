import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const Lists = ({listState, setListState}) => {

    //const [listState, setListState] = useState([]);

    const [edit, setEdit] = useState(0);

    useEffect(()=>{
        getMovies();
    }, []);

    const getMovies = e => {
        let movies = JSON.parse(localStorage.getItem("movies"));
        //console.log(movies);
        setListState(movies);

        return movies;
    }

    const deleteMovie = (id) => {
        //getMovie in localStorage
        let movies = getMovies();

        //filter movie
        let newListMovie = movies.filter(movie => movie.id !== parseInt(id));

        //update setlistState
        setListState(newListMovie);

        //update data localStorage
        localStorage.setItem("movies", JSON.stringify(newListMovie));

    }

    return (
        <>
            {/*aqui van las peliculas*/}
            {
                listState != null ?
                    listState.map(movie =>{
                        return (
                            <article key={movie.id} className="peli-item">
                                <h3 className="title">{movie.title}</h3>
                                <p className="description">{movie.description}</p>
                                <button onClick={() => setEdit(movie.id)} className="edit">Edit</button>
                                <button onClick={() => deleteMovie(movie.id)} className="delete">Delte</button>


                                {/*form edit*/}
                                {edit == movie.id && (
                                    <Edit   movie={movie} 
                                            getMovies={getMovies} 
                                            setEdit={setEdit}
                                            setListState={setListState}
                                    />
                                )}

                            </article>
                        );
                    })
                : <h2>There are no movies to show</h2>
            }    
            
            
        </>
    )
}
