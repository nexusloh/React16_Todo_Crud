import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };

        this.oneClick = () => {
            this.setState({
                done: true
            });
        };
    }

    render() {
        const { label, important = false } = this.props;

        const { done } = this.state;
        let classNames = '';
        if (done) {
            classNames += ' done'
        }

        const style = {
            color: important ? 'blue' : 'black'
        };

        return (
            <div className={'d-flex justify-content-between align-items-center'}>
                <span>
                    <span className={classNames} onClick={this.oneClick} style={style}>{ label }</span>
                </span>

                <span>
                    <span className={'badge badge-danger mr-2'}>x</span>
                    <span className={'badge badge-primary badge-pill'}>i</span>
                </span>
            </div>
        );
    }
}