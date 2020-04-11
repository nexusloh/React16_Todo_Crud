import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
    render() {
        const { label, important = false } = this.props;

        const style = {
            color: important ? 'blue' : 'black'
        };

        return (
            <div className={'d-flex justify-content-between align-items-center'}>
                <span>
                    <span style={style}>{ label }</span>
                </span>

                    <span>
                    <span className={'badge badge-danger mr-2'}>x</span>
                    <span className={'badge badge-primary badge-pill'}>i</span>
                </span>
            </div>
        );
    }
}