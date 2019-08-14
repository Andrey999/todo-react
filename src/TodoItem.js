import React, { Component } from 'react';
import './TodoItem.css'


const TodoItem = ({ task, handleDeleteItem }) => (
    <div className='todoList'>
                <ul className="todolist__item">
                    {
                        task.map((item, i) => {
                            return <li key={item.id}  >{ item.value }
                                    <span className="todolist__item-delete"  onClick={() => handleDeleteItem(i)} >&times;</span>
                                {/* <input type="checkbox" id={item.id} className='toggle' /> */}
                                    {/* <label htmlFor={item.id} className={isDone ? 'active' : null } onClick={this.handleLabelDecoration} >{item.value} */}
                                  
                                    {/* </label> */}
                                    
                            </li>
                        })
                    }
                </ul>
            </div>
  );

export default TodoItem;
