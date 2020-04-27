import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.scss';

const TodoList = ({ todoItems, onDeleted, isDone, isImportant }) => {
    const elements = todoItems.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li
                className={'list-group-item'}
                key={item.id}
            >
                <TodoListItem
                    { ...itemProps }
                    onDeleted={ () => onDeleted(id) }
                    isDone={ () => isDone(id) }
                    isImportant={ () => isImportant(id) }
                />
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