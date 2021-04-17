import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoviesList from '../Components/MoviesList/MoviesList';
import SearchForm from '../Components/searchForm/searchForm';
import Loader from '../Components/Loader';
import Api from '../Servises/Api';
import Button from '../Components/Buttom';

let isCanceled = true;
export class MoviesPage extends Component {
  state = {
    films: [],
    page: 1,
    query: '',
    error: null,
    isLoading: false,
    showLoadMoreButton: false,
  };
  componentDidMount() {
    const { query } = this.props.location;
    const { page } = this.state;
    const options = { query, page };
    isCanceled = true;
    this.props.location.query &&
      Api
        .fetchMoviesSearch(options)
        .then(data => {
          isCanceled && this.setState(prevState => ({
            films: [...prevState.films, ...data.results],
            page: prevState.page + 1,
            query: this.props.location.query,
          }));
        })
        .finally(() => {
          isCanceled && this.state.films.length === 0 && this.setState({ error: true });
          isCanceled && !this.state.error && this.setState({ showLoadMoreButton: true });
          isCanceled && this.setState({ isLoading: false });
          this.windowScrollTo();
        })
      ;
  }
  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }
  componentWillUnmount() {
    isCanceled = false;
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
    isCanceled = true;
    Api
      .fetchMoviesSearch(options)
      .then(data => {
        isCanceled && this.setState(prevState => ({
          films: [...prevState.films, ...data.results],
          page: prevState.page + 1,
          query: this.props.location.query,
        }));
      })
      .finally(() => {
        isCanceled && this.state.films.length === 0 && this.setState({ error: true });
        isCanceled && !this.state.error && this.setState({ showLoadMoreButton: true });
        isCanceled && this.setState({ isLoading: false });
        this.state.films.length < 20 && this.setState({ showLoadMoreButton: false });
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
        <div className="Load_button">
          {showLoadMoreButton && <Button handleGoBack={this.fetchMovies} text={'Load more'} />}
        </div>
      </>
    );
  }
}

MoviesPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MoviesPage;