import React, { Component } from 'react';
import './App.scss';

import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import AddItemForm from "../AddItemForm/AddItemForm";

export default class Class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoData: [
                { id: 1, label: '111', important: false, done: false },
                { id: 2, label: '222', important: true, done: false },
                { id: 3, label: '333', important: false, done: false },
            ],

            maxId: 10,
            term: ''
        };

        this.createTodoItem = (label) => {
            return {
                label,
                important: false,
                done: false,
                id: this.state.maxId++
            }
        }

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

        this.itemAdd = (text) => {
            let newItem = this.createTodoItem(text)

            this.setState(({ todoData }) => {
                let newArr = [...todoData, newItem];

                return {
                    todoData: newArr
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

        this.search = (items, term) => {
            if (term.length === 0) {
                return items;
            }

            return items.filter((item) => {
                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
            });
        };

        this.onSearchChange = (term) => {
            this.setState({ term });
        };
    };

    render() {
        let { todoData, term } = this.state;

        let filteredItems = this.search(todoData, term)
        let doneCount = todoData.filter((el) => el.done).length;
        let todoCount = todoData.length - doneCount;

        return (
            <div className={'app-wrapper'}>
                <AppHeader doneCount={ doneCount } todoCount={ todoCount } />
                <SearchBar onSearchChange={this.onSearchChange}/>
                <TodoList
                    todoItems={ filteredItems }
                    onDeleted={ this.itemDelete }
                    isDone={ this.isDone }
                    isImportant={ this.isImportant }
                />
                <AddItemForm itemAdd={this.itemAdd}/>
            </div>
        );
    };
}