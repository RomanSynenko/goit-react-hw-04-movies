import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    visible: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "home-page" */)
    ),
  },
  {
    name: "Movies",
    path: "/movies",
    exact: true,
    visible: true,
    component: lazy(() =>
      import("../pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
    ),
  }, {
    name: 'movieDetailsPage',
    path: '/movies/:movieId',
    exact: false,
    visible: false,
    component: lazy(() =>
      import(
        '../pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
      ),
    ),
  },
];
