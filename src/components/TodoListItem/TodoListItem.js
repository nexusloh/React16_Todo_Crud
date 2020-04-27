import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
    render() {
        const { label, onDeleted, isDone, isImportant, done, important } = this.props;

        let classNames = '';
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <div className={'d-flex justify-content-between align-items-center'}>
                <span>
                    <span className={classNames} onClick={isDone}>{ label }</span>
                </span>

                <span>
                    <span className={'badge badge-danger mr-2'} onClick={onDeleted}>x</span>
                    <span className={'badge badge-primary badge-pill'} onClick={isImportant}>i</span>
                </span>
            </div>
        );
    }
}