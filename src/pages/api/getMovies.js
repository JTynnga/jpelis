async function getMovies(req, res) {
    const pageNumber = 1;
    const configUrl = `${process.env.API_URL}/3/configuration?api_key=${process.env.API_KEY}`;
    const genresUrl = `${process.env.API_URL}/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`;
    const movieListUrl = `${process.env.API_URL}/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;

    const urls = [
    {key: "movies", url: movieListUrl},
    {key: "genres", url: genresUrl},
    {key: "config", url: configUrl},
    ];
    
}