import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import defaultImage from '../../image/defaultImage.jpeg';
import { MoviesContainer } from './MoviseListStyled';

const URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

function MoviesList({ films, location }) {

    return (
        <MoviesContainer>
            {films.map(film => (
                <li key={film.id}>
                    <Link
                        to={{
                            apdateList: location.apdateList,
                            pathname: `/movies/${film.id}`,
                            state: {
                                from: location.pathname,
                                query: location.query
                            },
                        }}
                    >
                        <img
                            src={film.poster_path ? `${URL}${film.poster_path}` : defaultImage}
                            alt="movie"
                            width="200"
                            height="300"
                        />
                        <p>{film.original_title}</p>
                        <p>Vote average: {film.vote_average}</p>
                    </Link>
                </li>
            ))}
        </MoviesContainer>
    );
};
export default withRouter(MoviesList);