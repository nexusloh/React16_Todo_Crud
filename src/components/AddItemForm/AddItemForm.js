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
            if (this.state.label !== '') {
                e.preventDefault();
                this.props.itemAdd(this.state.label);

                this.setState({
                    label: ''
                });
            } else {
                e.preventDefault()
            }
        };
    }

    render() {
        return (
            <form className={'add-item-form pt-3 d-flex'} onSubmit={this.onSubmit}>
                <input type="text" className={'form-control mr-3'} onChange={this.onLabelChange} value={this.state.label}/>
                <button className={'btn btn-dark'}>
                    Add
                </button>
            </form>
        );
    };
}