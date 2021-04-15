import React, { Component } from 'react'


import Loader from "react-loader-spinner";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.scss';

export default class App extends Component {
    render() {
        return (
            <Loader
                className={s.Loader}
                type="Puff"
                color="#3f51b5"
                height={100}
                width={100}
            />
        );
    }
}