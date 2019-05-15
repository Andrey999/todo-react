import React from 'react';

const TodoItem = ({ propsValue }) => {
    const listArr = [
        {
            id: 1,
            list: "Learn React"
        },

        {
            id: 2,
            list: "Learn Vue"
        },

        {
            id: 3,
            list: "Learn Angular"
        },
        {
            id: 4,
            list: "Learn Angular fsggggggggggggggggggdgdfgdfgdgfd"
        }
    ];

    return (
        <div className='todoList'>
            <ul>
                { listArr.map(item => {
                   return <li key={item.id}> { item.list } </li>
                }) }
            </ul>
        </div>
    );





};

export default TodoItem;
