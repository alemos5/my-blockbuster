import React, { useState } from 'react'
import { SaveStorage } from '../helpers/SaveStorage';

export const Form = ({setListState}) => {

    const titleComponent = "Add movie";

    const [movieState, setMovieState] = useState({
        title:'',
        description:''
    })

    const {title, description } = movieState;

    const getFormValue = e => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        setMovieState(movie);

        //update setListState
        setListState(items =>{
            return [...items, movie];
        });
        
        // save storage 
        SaveStorage("movies", movie);

        //console.log(movieState);
    }

    

  return (
    <>
        <div className="add">
            <h3 className="title">{titleComponent}</h3>

            <strong>
                {(title && description) && "You have created the movie: "+movieState.title}
            </strong>

            <form onSubmit={getFormValue} >
                <input type="text" 
                    id="title" 
                    placeholder="Title" 
                    name="title"    
                />
                <textarea 
                    id="description" 
                    placeholder="Descripción"
                    name="description"
                ></textarea>
                <input type="submit" id="save" value="Save" />
            </form>
        </div>
    </>
  )
}
