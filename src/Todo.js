import React, { Component } from 'react';
import TodoItem from './TodoItem';

import './Todo.css';

class Todo extends Component {
    state = {
        task: [],
        value: '',
    };

    // добавляем  Task при клике на Enter
    addValueToItem = (event) => {
        const { value, task } = this.state;

        if (value.length > 3 && event.key === 'Enter') {
            const inputValue = {
                value: value,
                id: +new Date(),
            };

            this.setState( {
                task: task.concat(inputValue),
                value: '',
            });
        } else {
            return false;
        }
    };

    handleDeleteTask = () => {

    };

    handleInputChange = (event) => {
        this.setState({  value: event.target.value  })
    };

    render() {
        const { value, task } = this.state;

        return(
            <div className="todo">
                    <input type="text"
                           className="todoInput"
                           placeholder="Создайте свой Task"
                           value={value}
                           onChange={ this.handleInputChange }
                           onKeyPress={ this.addValueToItem }
                    />

                <TodoItem
                    propsValue={ task }
                    handleDeleteTask={this.handleDeleteTask}
                />
            </div>
        )
    }

}

export default Todo;