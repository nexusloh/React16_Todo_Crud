import React, { Component } from 'react';
import './App.scss';

import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";

export default class Class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoData: [
                { id: 1, label: '111', important: false },
                { id: 2, label: '222', important: true },
                { id: 3, label: '333', important: false },
            ]
        };

        this.itemDelete = (id) => {
            this.setState(({ todoData }) => {
                let index = todoData.findIndex((element) => element.id === id);

                let newArray = [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)
                ];

                return {
                    todoData: newArray
                };
            });
        };
    };

    render() {
        return (
            <div className={'app-wrapper'}>
                <AppHeader/>
                <SearchBar/>
                <TodoList
                    todoItems={ this.state.todoData }
                    onDeleted={ this.itemDelete }
                />
            </div>
        );
    };
}