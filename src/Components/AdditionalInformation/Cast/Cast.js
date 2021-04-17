import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Api from '../../../Servises/Api';
import defaultImage from '../../../image/defaultImage.jpeg';

let isCanceled = true;
export class Cast extends Component {
    state = {
        cast: [],
    };

    async componentDidMount() {
        const movieId = this.props.movieId;

        Api.fetchCast(movieId).then(data => {
            isCanceled && this.setState({ ...data });
        });
    }
    componentWillUnmount() {
        isCanceled = false;
    }
    render() {
        isCanceled = true;
        const BASE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
        const { cast } = this.state;
        return (
            <ul>
                {cast.map(actor => (
                    <li key={actor.id} >
                        <img src={
                            actor.profile_path
                                ? `${BASE_URL}${actor.profile_path}`
                                : defaultImage
                        }
                            width="150"
                            alt="photo"
                        />
                        <h3>{actor.name}</h3>
                        <p >Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

Cast.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default Cast;
