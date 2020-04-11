import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.scss';

const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li
                className={'list-group-item'}
                key={item.id}
            >
                <TodoListItem { ...itemProps } />
            </li>
        );
    });
    return (
        <ul className={'list-group list-group-flush'}>
            { elements }
        </ul>
    );
};

export default TodoList;