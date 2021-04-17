import React, { Component } from 'react';

import Api from '../../../Servises/Api';
import PropTypes from 'prop-types';
import './reviews.scss'

let isCanceled = true;

export class Reviews extends Component {
    state = {
        results: [],
    };

    async componentDidMount() {
        isCanceled = true;
        const movieId = this.props.movieId;

        Api.fetchReviews(movieId).then(data => {
            isCanceled && this.setState({ ...data });
        });
    }
    componentWillUnmount() {
        isCanceled = false;
    }
    render() {
        const { results } = this.state;

        return (
            <>
                {
                    <ul className="reviews">
                        {results.map(result => (
                            <li className="reviews-item" key={result.author}>
                                <h3 >Author: {result.author}</h3>
                                <p >{result.content}</p>
                            </li>
                        ))}
                    </ul>
                }
            </>
        );
    }
}

Reviews.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default Reviews;
