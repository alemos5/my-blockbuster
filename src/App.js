import { useState } from "react";
import { Form } from "./components/Form";
import { Lists } from "./components/Lists";
import { Searcher } from "./components/Searcher";

function App() {

    const [listState, setListState] = useState([]);

  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MyMovies</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">

             {/*aqui van el listado de peliculas*/}
            <Lists listState={listState} setListState={setListState} />

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            {/*Seacher*/}
            <Searcher listState={listState} setListState={setListState} />

            {/*Form*/}
            <Form setListState={setListState} />
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Máster en React - <a href="https://armandolemos.com">armandolemos.com</a>
        </footer>

    </div>  
  );
}

export default App;
