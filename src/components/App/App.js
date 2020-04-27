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
                { id: 1, label: '111', important: false, done: false },
                { id: 2, label: '222', important: true, done: false },
                { id: 3, label: '333', important: false, done: false },
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

        this.toggleProp = (arr, id, propName) => {
            let index = arr.findIndex((element) => element.id === id);

            let oldItem = arr[index]
            let newItem = { ...oldItem, [propName]: !oldItem[propName] }

            return [
                ...arr.slice(0, index),
                newItem,
                ...arr.slice(index + 1)
            ];
        };

        this.isDone = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProp(todoData, id, 'done')
                }
            });
        };

        this.isImportant = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProp(todoData, id, 'important')
                }
            });
        };
    };

    render() {
        let { todoData } = this.state;
        let doneCount = todoData.filter((el) => el.done).length;
        let todoCount = todoData.length - doneCount;

        return (
            <div className={'app-wrapper'}>
                <AppHeader doneCount={ doneCount } todoCount={ todoCount } />
                <SearchBar/>
                <TodoList
                    todoItems={ todoData }
                    onDeleted={ this.itemDelete }
                    isDone={ this.isDone }
                    isImportant={ this.isImportant }
                />
            </div>
        );
    };
}