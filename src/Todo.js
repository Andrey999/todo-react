import React, { Component } from 'react';
import TodoItem from './TodoItem';

import './Todo.css';

class Todo extends Component {
    state = {
        task: [],
        value: '',
        isDone: false
    };

    // добавляем  Task при клике на Enter
    addValueToItem = (event) => {
        const { value, task, isDone } = this.state;

        if (value.length > 3 && event.key === 'Enter') {
            const inputValue = {
                value: value,
                id: +new Date(),
                isDone: true
            };

            this.setState( {
                task: task.concat(inputValue),
                value: '',
            });
        } else {
            return false;
        }
    };


    handleLabelDecoration = (event) => {
        const { isDone } = this.state;

        if(event.target) {
            this.setState({  isDone: !this.state.isDone  });
        }
        console.log(isDone)
    };


    handleDeleteTask = (event) => {
        console.log(event.target)
    };

    //
    handleChange = (event) => {
        this.setState({  value: event.target.value  })
    };

    render() {
        const { value, task } = this.state;
        console.log(task);

        return(
            <div className="todo">
                    <input type="text"
                           className="todoInput"
                           placeholder="Создайте свой Task"
                           value={value}
                           onChange={ this.handleChange }
                           onKeyPress={ this.addValueToItem }
                    />

                <TodoItem
                    propsValue={ task }
                    handleLabelDecoration={ this.handleLabelDecoration }
                    handleDeleteTask={ this.handleDeleteTask }
                />
            </div>
        )
    }

}

export default Todo;