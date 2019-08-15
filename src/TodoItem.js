import React, { Component } from 'react';
import './TodoItem.css'


const TodoItem = ({ task, handleDeleteItem, handleComplete }) => (
    <div className='todoList'>
                <ul className="todolist__item">
                    {
                        task.map((item, i) => {
                            return <li key={item.id}  >
                                <input type="checkbox" className='toggle' onClick={() => handleComplete(i) } /> 
                                    <label htmlFor={item.id} >
                                        <span className={item.done ? 'active' : '' } >{ item.value }</span>
                                        <span className="todolist__item-delete" onClick={() => handleDeleteItem(i)} >&times;</span>
                                    </label>
                                    
                            </li>
                        })
                    }
                </ul>
            </div>
  );

export default TodoItem;
