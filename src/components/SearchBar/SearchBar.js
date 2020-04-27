import React, { Component } from 'react';
import './SearchBar.scss';
import Filter from "../Filter/Filter";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };

        this.onSearch = (e) => {
            let term = e.target.value;
            this.setState({ term });
            this.props.onSearchChange(term);
        };
    }

    render() {
        const { filter, onFilterChange } = this.props

        return (
            <div className={'btn-toolbar mb-3'}>
                <div className="btn-group">
                    <input
                        className={'form-control'}
                        placeholder={'search'}
                        value={ this.state.term }
                        onChange={ this.onSearch }
                    />
                </div>
                <Filter onFilterChange={ onFilterChange } filter={ filter }/>
            </div>
        );
    }
};