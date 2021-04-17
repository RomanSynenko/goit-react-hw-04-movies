import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Api from '../Servises/Api';
import Button from '../Components/Buttom';

import './MovieDetailsStyle.scss'
import MovieDetails from '../Components/MovieDetails/MovieDetails';

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
        const id = this.props.match.params.movieId;
        return (
            <>
                <div className='Back_button'>
                    <Button handleGoBack={this.handleGoBack} text={'Go back'} />
                </div>
                {this.state.renderBlock && <MovieDetails state={this.state} id={id} props={this.props} />}

            </>
        )
    }
};

MovieDetailsPage.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

