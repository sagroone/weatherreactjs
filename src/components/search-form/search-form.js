import React from 'react';

import './_search-form.scss';
import logo from './search-ico.svg';


const SearchForm = ( props ) => {
 
    // const classNames = (this.props.state.isValidate) ? 'search-form__input ' : 'search-form__input error';
    return (
        <div className="container">
            <div className="search-form">
                <img alt="search ico" className="search-form__ico" src={logo} />
                <input type="text" className='search-form__input' onKeyPress={() => {
                    console.log(this)
                }} placeholder="Enter your city" />
            </div>
        </div>
    );
}

export default SearchForm;