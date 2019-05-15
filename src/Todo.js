import React, { Component } from 'react';
import TodoItem from './TodoItem';

import './Todo.css';

class Todo extends Component {
    state = {
        inputValue: '',
    };


    handleChangeInputValue = (event) => {

        this.setState({
            inputValue: event.target.value
        })
    };



    render() {
        const { inputValue } = this.state;

        return(
            <div className="todo">
                    <input type="text" className="todoInput" placeholder="Создайте свой Task" value={inputValue} onChange={ this.handleChangeInputValue }/>
                <TodoItem propsValue={ inputValue }/>
            </div>
        )
    }

}

export default Todo;
