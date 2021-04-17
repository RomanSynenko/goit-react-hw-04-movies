import { lazy } from 'react';

const castRoutes = [
    {
        name: 'Cast',
        path: '/cast',
        exact: true,
        visible: true,
        component: lazy(() =>
            import(
                '../Components/AdditionalInformation/Cast/Cast' /* webpackChunkName: "cast" */
            ),
        ),
    },
    {
        name: 'Reviews',
        path: '/reviews',
        exact: true,
        visible: true,
        component: lazy(() =>
            import(
                '../Components/AdditionalInformation/Reviews/Reviews' /* webpackChunkName: "reviews" */
            ),
        ),
    },
];
export default castRoutes