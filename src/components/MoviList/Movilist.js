import PropTypes from 'prop-types';

const MovieList =({movies, onSelectMovie, selectMovie}) =>{
  return (
         <ul className={styles.movies} >
            {movies.map((movie)=>( 
               <li key={movie.id}
                className={${styles.movie} ${selectMovie.id === 
                movie.id ? styles.active : "" } }
                onClick={onSelectMovie(movie)}
                >
                    {movie.title}
                </li>
            ))}
         </ul>
  );
};
MovieList.PropTypes = {
    movies: PropTypes.array,
    onSelectMovie:PropTypes.func,
    selectMovie: PropTypes.object
};

export default MovieList;
