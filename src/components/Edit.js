import React, { Component } from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {
    const title_component = "Edit Movie";

    const saveEdit = (e, id) => {
        e.preventDefault();

        //search target event
        let target = e.target;

        //Search index object localStorage
        const movieSave = getMovies();
        const index = movieSave.findIndex(movie => movie.id === id);

        //Create object with index
        let movieUpdate = {
            id,
            title: target.title.value,
            description : target.description.value
        };

        //Update elemte with is index
        movieSave[index] = movieUpdate;

        //Save new array localStorage
        localStorage.setItem("movies", JSON.stringify(movieSave));

        setListState(movieSave);
        setEdit(0);

    }
    
    const closeFormEdit = e => {
        setEdit(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{title_component}</h3>
            <form onSubmit={ e => saveEdit(e, movie.id)}>
                <input type="text"
                        name='title'
                        className='title_edit'
                        defaultValue={movie.title} />
                
                <textarea
                    name="description"
                    defaultValue="Descriptions movie"
                    className={movie.description} />

                <input type="submit" className="edit" value="Update" />
                <button className="close" onClick={e => closeFormEdit} >Close</button>
            </form>
        </div>
    )
}
