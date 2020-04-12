import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.scss';

const TodoList = ({ todoItems, onDeleted }) => {
    const elements = todoItems.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li
                className={'list-group-item'}
                key={item.id}
            >
                <TodoListItem { ...itemProps } onDeleted={ () => onDeleted(id) } />
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