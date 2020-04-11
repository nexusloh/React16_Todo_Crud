import React from 'react';
import './App.scss';

import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";

const App = () => {
    const  todoData = [
        { label: '111', important: false, id: 1 },
        { label: '222', important: true, id: 2 },
        { label: '333', important: false, id: 3 },
    ];

    return (
        <div className={'app-wrapper'}>
            <AppHeader/>
            <SearchBar/>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;