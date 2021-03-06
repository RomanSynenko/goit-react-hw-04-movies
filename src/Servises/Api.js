import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '93638e3fbf6f3d3914a333647822b76d';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    api_key: API_KEY,
};

const fetchMoviesDay = async () => {
    try {
        const { data } = await axios.get(`/trending/movie/day`);
        return data;
    } catch (error) {
        throw error;
    }
};

const fetchMoviesSearch = async ({ query, page }) => {
    try {
        const { data } = await axios.get(`/search/movie`, {
            params: { query, page },
        });
        return data;
    } catch (error) {
        throw error;
    }
};

const fetchMoviesDetail = async movieId => {
    try {
        const { data } = await axios.get(`/movie/${movieId}`);
        return data;
    } catch { }
};
const fetchCast = async movieId => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/credits`);
        return data;
    } catch { }
};

const fetchReviews = async movieId => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/reviews`);
        return data;
    } catch { }
};


fetchMoviesSearch.propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};
fetchMoviesDetail.propTypes = {
    movieId: PropTypes.number.isRequired,
};
fetchCast.propTypes = {
    movieId: PropTypes.number.isRequired,
};

fetchReviews.propTypes = {
    movieId: PropTypes.number.isRequired,
};


export default {
    fetchMoviesDay,
    fetchMoviesSearch,
    fetchMoviesDetail,
    fetchCast,
    fetchReviews
};