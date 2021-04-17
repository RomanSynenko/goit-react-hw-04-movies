import React, { Component } from "react";

import Loader from "../Components/Loader";
import MoviesList from "../Components/MoviesList/MoviesList";
import Api from '../Servises/Api';

let isCanceled = true;
export default class HomePage extends Component {
  state = {
    films: [],
    isLoading: false,
  };

  componentDidMount() {
    isCanceled = true;
    this.setState({ isLoading: true });
    Api
      .fetchMoviesDay()
      .then(
        data => {
          isCanceled && this.setState({ films: data.results });
        })
      .finally(() => {
        isCanceled && this.setState({ isLoading: false });
      });
  }
  componentWillUnmount() {
    isCanceled = false;
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <h2 className='moviesTitle'>Trending today</h2>
        {isLoading && <Loader />}
        <MoviesList films={this.state.films} />
      </>
    );
  }
}

