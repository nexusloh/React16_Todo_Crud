import React, { Component } from 'react';

export default class AddItemForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: ''
        };

        this.onLabelChange = (event) => {
            this.setState({
                label: event.target.value
            });
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.itemAdd(this.state.label)
        };
    }

    render() {
        return (
            <form className={'add-item-form pt-3 d-flex'} onSubmit={this.onSubmit}>
                <input type="text" className={'form-control mr-3'} onChange={this.onLabelChange}/>
                <button className={'btn btn-dark'}>
                    Add
                </button>
            </form>
        );
    };
}