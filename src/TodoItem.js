import React from 'react';
import './TodoItem.css'

const TodoItem = ({ propsValue, handleLabelDecoration, handleDeleteTask }) => {

    console.log('handleLabelDecoration:',handleLabelDecoration,
        'handleDeleteTask:', handleDeleteTask);

    return (
        <div className='todoList'>
            <ul className="todolist__item">
                {
                    propsValue.map(item => {
                        return <li key={item.id}>
                            {

                            }

                            <input type="checkbox" id={item.id} className="toggle"/>
                            <label htmlFor={item.id} onClick={ handleLabelDecoration }>{item.value}</label>
                            <button className="todolist__item-delete" onClick={ handleDeleteTask }>&times;</button>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default TodoItem;
