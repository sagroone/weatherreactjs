import React, { Component } from 'react';
import './_app.scss';

import SearchForm from '../search-form'

export default class App extends Component {

    render() {
        return (
            <div className="weather">
                <SearchForm />
            </div>
        );
    }
}
