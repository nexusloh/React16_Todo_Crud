import React, { Component } from 'react';
import './Filter.scss';

export default class Filter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'done', label: 'Done' },
        { name: 'important', label: 'Important' }
    ];

    render() {
        let { filter, onFilterChange } = this.props;

        let buttons = this.buttons.map(({ name, label }) => {
            let isActive = filter === name;
            let clazz = isActive ? 'btn-info' : 'btn-secondary';
            return <button type="button" className={`btn ${ clazz }`} key={ name } onClick={ () => onFilterChange(name) }>{ label }</button>
        });

        return(
            <div className="btn-group ml-3">
                { buttons }
            </div>
        );
    };
}
