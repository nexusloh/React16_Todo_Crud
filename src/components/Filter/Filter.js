import React, { Component } from 'react';
import './Filter.scss';

export default class Filter extends Component{
    render() {
        return(
            <div className="btn-group ml-3">
                <button type="button" className="btn btn-secondary">All</button>
                <button type="button" className="btn btn-secondary">Done</button>
                <button type="button" className="btn btn-secondary">Important</button>
            </div>
        );
    }
}
