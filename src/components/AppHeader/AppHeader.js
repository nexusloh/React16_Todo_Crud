import React from 'react';
import './AppHeader.scss';

const AppHeader = () => {
    return (
        <div className={'app-header mb-3'}>
            <h1>
                Todo List
            </h1>
            <span>
                <span className={'badge badge-secondary'}>1</span> more to do,
                <span className={'badge badge-secondary'}>3</span> done
            </span>
        </div>
    );
};

export default AppHeader;