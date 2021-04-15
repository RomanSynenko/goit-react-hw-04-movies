import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "home-page" */)
    ),
  },
  {
    name: "Movies",
    path: "/movies",
    exact: true,
    component: lazy(() =>
      import("../pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
    ),
  }, {
    name: 'movieDetailsPage',
    path: '/movies/:movieId',
    exact: false,
    list: false,
    component: lazy(() =>
      import(
        '../pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
      ),
    ),
  },
];
