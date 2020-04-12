import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            important: false
        };

        this.oneClickSpan = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                };
            });
        };

        this.oneClickImportant = () => {
            this.setState(({important}) => {
                return {
                    important: !important
                };
            });
        };
    };

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

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
                    <span className={classNames} onClick={this.oneClickSpan}>{ label }</span>
                </span>

                <span>
                    <span className={'badge badge-danger mr-2'} onClick={onDeleted}>x</span>
                    <span className={'badge badge-primary badge-pill'} onClick={this.oneClickImportant}>i</span>
                </span>
            </div>
        );
    }
}