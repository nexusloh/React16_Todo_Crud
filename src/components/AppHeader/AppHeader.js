import React, { Component } from 'react';
import './AppHeader.scss';

export default class AppHeader extends Component {
    render() {
        const { doneCount, todoCount } = this.props;

        return (
            <div className={'app-header mb-3'}>
                <h1>Todo List</h1>
                <span>
                    <span className={'badge badge-secondary'}>{todoCount}</span> more to do,
                    <span className={'badge badge-secondary'}>{doneCount}</span> done
                </span>
            </div>
        );
    }
};