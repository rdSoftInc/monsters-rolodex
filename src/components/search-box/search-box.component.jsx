import React from 'react';
import './search-box.styles.css'

export const SearchBar = (props) => ( <input type="search" className="search" placeholder={ props.searchName } onChange={props.handleChange} /> )