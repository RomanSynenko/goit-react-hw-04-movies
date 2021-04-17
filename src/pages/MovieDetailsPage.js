import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router';

import Api from '../Servises/Api';
import Button from '../Components/Buttom';
import defaultImage from '../image/defaultImage.jpeg'
import Navigation from '../Components/navigation/Navigation';
import castRoutes from '../routes/castRoutes'
import Loader from '../Components/Loader';

import './MovieDetailsStyle.scss'
let isCanceled = true;
export default class MovieDetailsPage extends Component {
    state = {
        genres: [],
        original_title: '',
        overview: '',
        poster_path: '',
        release_date: '',
        vote_average: '',
        vote_count: '',
        from: '',
        query: '',
        renderBlock: false,

    };
    async componentDidMount() {
        isCanceled = true;
        const id = this.props.match.params.movieId;
        Api.fetchMoviesDetail(id)
            .then(data => {
                isCanceled && this.setState({
                    ...data,
                    from: this.props.location.state?.from,
                    query: this.props.location.state?.query,
                });
            })
            .finally(() => { isCanceled && this.setState({ renderBlock: true }) });
    };
    componentWillUnmount() {
        isCanceled = false;
    }
    handleGoBack = () => {
        const { from, query } = this.state;
        const { history } = this.props;
        from && query ? history.push({
            pathname: from,
            search: `query=${query}`,
            query,
        }) : history.push('/');
    };

    render() {
        const {
            popularity,
            genres,
            original_title,
            overview,
            poster_path,
            release_date,
            vote_average,
            backdrop_path,
            renderBlock
        } = this.state;

        const id = this.props.match.params.movieId;
        console.log()
        const BASE_URL = "https://image.tmdb.org/t/p/original"
        return (
            <>
                <div className='Back_button'>
                    <Button handleGoBack={this.handleGoBack} text={'Go back'} />
                </div>
                {renderBlock &&
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
                            <Navigation routes={castRoutes} match={this.props.match.url} />
                            <Suspense fallback={<Loader />}>
                                {castRoutes.map(({ path, component: MyComponent }) => (
                                    <Route
                                        key={path}
                                        path={`${this.props.match.url}${path}`}
                                        render={props => <MyComponent movieId={id} {...props} />}
                                    ></Route>
                                ))}
                            </Suspense>
                        </div>
                    </div>}

            </>
        )
    }
};

MovieDetailsPage.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

