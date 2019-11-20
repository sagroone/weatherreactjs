import React, { Component } from 'react';

import './_search-form.scss';
import ico from './search-ico.svg';


const SearchForm = ( props ) => {

    
    let city = '';
    
    const submit = ( event ) => {
        event.preventDefault();
        props.showElem( city )
    }

    const changeState = ( event ) => {
        city = event.target.value
    }
    
    const classNames = (props.state.isValidate) ? 'search-form__input ' : 'search-form__input error';

    return (
        <form onSubmit={submit} method="GET" action="#"  className="search-form">
            <img alt="search ico" className="search-form__ico " src={ico} />
            <input name="city" type="text" onChange={changeState} className={classNames} placeholder="Enter your city" />
        </form>
    );
};

export default SearchForm 