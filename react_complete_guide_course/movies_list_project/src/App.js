import React,{useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from "./components/AddMovie";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /*const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];*/
/*  const fetchMoviesHandler = () => {
      fetch("https://swapi.dev/api/films/").then((response) => {
        return response.json();
      }).then((data) => {
        const mappedMovies = data.results.map((movie) => {
            return {id: movie.episode_id, title: movie.title, openingText: movie.opening_crawl, releaseDate:movie.release_rate};
        });
        setMovies(mappedMovies);
      });
  };*/
const fetchMoviesHandler = useCallback(async ()=> {
  setIsLoading(true);
  setError(null);
  try {
    // star wars dummy backend
    //const response = await fetch("https://swapi.dev/api/films/");
    // my dummy backend
    const response = await fetch("https://react-test-7bc77-default-rtdb.firebaseio.com/movies.json");
    if(!response.ok)
    {
      throw new Error("something went wrong");
    }
    const data = await response.json();
    const loadedMovies = []
    for(const key in data)
    {
      loadedMovies.push({
        id: key, title:data[key].title,openingText:data[key].openingText,releaseDate:data[key].releaseDate
      });
    }
    //process star wars data
    //const mappedMovies = data.results.map((movie) => {
    //  return {id: movie.episode_id, title: movie.title, openingText: movie.opening_crawl, releaseDate:movie.release_rate};
    //});
    setMovies(loadedMovies);
    setIsLoading(false);
  } catch (e) {
    setIsLoading(false);
    setError(e.message);
  }

}, []);

useEffect(() => {
  fetchMoviesHandler();
}, [fetchMoviesHandler]);

async function addMovieHandler(movie){
  console.log(movie);
  const response = await fetch("https://react-test-7bc77-default-rtdb.firebaseio.com/movies.json",{
    method: "POST",
    body: JSON.stringify(movie),
    headers: {"Content-Type":'application/json'}
  });
  const data = await response.json();
  console.log(data);
  //use refs to clear out the form
};

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>Found no movies</p>}
        {isLoading && <p>...Loading</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
