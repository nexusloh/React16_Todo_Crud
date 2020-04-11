import React from 'react';
import Filter from "../Filter/Filter";
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className={'btn-toolbar mb-3'}>
            <div className="btn-group">
                <input className={'form-control'} placeholder={'search'} />
            </div>
            <Filter/>
        </div>
    );
};

export default SearchBar;