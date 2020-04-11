import React from 'react';
import './Filter.scss';

const Filter = () => (
    <div className="btn-group ml-3">
        <button type="button" className="btn btn-secondary">All</button>
        <button type="button" className="btn btn-secondary">Done</button>
        <button type="button" className="btn btn-secondary">Important</button>
    </div>
);

export default Filter;
