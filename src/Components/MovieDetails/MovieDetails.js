import React, { Suspense } from 'react';
import { Route } from 'react-router';
import Navigation from '../navigation/Navigation';

import defaultImage from '../../image/defaultImage.jpeg'
import Loader from '../Loader';
import castRoutes from '../../routes/castRoutes';

const BASE_URL = "https://image.tmdb.org/t/p/original"
const MovieDetails = ({ state, id, props }) => {
    console.log(id, props)
    const {
        popularity,
        genres,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average,
        backdrop_path
    } = state;
    return (
        <div className="movie-section"
            style={{ background: `url(${BASE_URL}${backdrop_path}) 0 0 / cover` }}
        >

            <div className="movie-section_image-block">
                <img src={poster_path ? `${BASE_URL}${poster_path}` : defaultImage} alt="foto" width="400" />
                <p>Popularity: {popularity}</p>
                <p>Stars: {vote_average}</p>
                <p>Ralease: {release_date}</p>
                <h3>Genres</h3>
                <ul className='genre_list'>
                    {genres.map(genre => (
                        <li className='genre_list-item' key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
            <div className="movie-subscribe">
                <h2>{original_title}</h2>
                <p>{overview}</p>
                <p className="movies-information-text">Additional information</p>
                <Navigation routes={castRoutes} match={props.match.url} />
                <Suspense fallback={<Loader />}>
                    {castRoutes.map(({ path, component: MyComponent }) => (
                        <Route
                            key={path}
                            path={`${props.match.url}${path}`}
                            render={props => <MyComponent movieId={id} {...props} />}
                        ></Route>
                    ))}
                </Suspense>
            </div>
        </div>
    )
};

export default MovieDetails;