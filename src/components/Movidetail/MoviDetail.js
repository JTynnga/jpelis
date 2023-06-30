import PropTypes from 'prop-types'

const MovieDetail = ({selectedMovie, imageurl, movieGenres})=>{
    return (
        <div className={StyleSheet.movieDetail}>
            <div className={StyleSheet.movieImage}>
                <img src={imageUrl} alt={selectedMovie.title}/> 
            </div>
            
            <div>
                <h2>
                    {selectedMovie.title} ({selectedMovie.release_date.split('-')[0]})</h2>
                <p className={StyleSheet.movieDesc}>{selectedMovie.overwiev}</p>
            </div>
            <div>
            <p><strong>Lenguaje:</strong>{selectedMovie.original_language}</p>
            <p><strong>Rating:</strong>{selectedMovie.vote_average}/10</p>
            <p><strong>Genre:</strong>{movieGenres}</p>
            </div>
        </div>
    )
}
    MovieDetail.protoTypes ={
    movieGenres: PropTypes.string,
    imageUrl: PropTypes.string,
    selectedMovie: PropTypes.object
    };
    
    export default MovieDetail;