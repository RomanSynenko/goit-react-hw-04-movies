import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MoviesList from '../Components/MoviesList/MoviesList';
import SearchForm from '../Components/searchForm/searchForm';
import Loader from '../Components/Loader';
import Api from '../Servises/Api';
import LoadButton from '../Components/LoadButtom';


export class MoviesPage extends Component {
  state = {
    films: [],
    page: 1,
    query: '',
    error: null,
    isLoading: false,
    showLoadMoreButton: false,
    isCanceled: true
  };


  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }
  componentWillUnmount() {
    this.setState({ isCanceled: false })
  }

  onChengeQuery = query => {
    this.setState({
      query: query,
      page: 1,
      films: [],
      error: null,
    });
  };

  fetchMovies = () => {
    this.setState({ isLoading: true });
    const { query, page } = this.state;
    const options = { query, page };
    Api
      .fetchMoviesSearch(options)
      .then(data => {
        this.state.isCanceled && this.setState(prevState => ({
          films: [...prevState.films, ...data.results],
          page: prevState.page + 1,
          query: this.props.location.query,
        }));
      })
      .finally(() => {
        this.state.films.length === 0 && this.setState({ error: true });
        !this.state.error && this.setState({ showLoadMoreButton: true });
        this.setState({ isLoading: false });
        this.windowScrollTo();
      })
      ;
  };
  windowScrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  render() {
    const { films, error, isLoading, showLoadMoreButton } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onChengeQuery} />
        {!isLoading && <MoviesList films={films} />}
        {error && <h2 className='errorTitle'>Something went wrong</h2>}
        {isLoading && <Loader />}
        {showLoadMoreButton && <LoadButton loadMore={this.fetchMovies} />}
      </>
    );
  }
}

MoviesPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MoviesPage;