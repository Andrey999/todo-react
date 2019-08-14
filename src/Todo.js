import React, { Component } from 'react';
import TodoItem from './TodoItem';

import './Todo.css';

class Todo extends Component {
    state = {
        task: [], // массив тасков
        value: '', // значение в инпут
    };

    // добавляем  Task при клике на Enter
    addValueToItem = (event) => {
        const { value, task } = this.state;

        if (value.length > 3 && event.key === 'Enter') {
            const inputValue = { // добавляем в обьект
                value: value,    // значение инпута
                id: +new Date(), // id для таски
            };
            this.setState({
                task: task.concat(inputValue),
                value: '',
            });
        }  else return false;
    };
    // вводимые значения
    handleInputChange = (event) => {
        this.setState({  value: event.target.value  })
    };

    handleDeleteItem = (index) => {
        const { task } = this.state;
        let newTask = task.filter(( item, i ) => i !== index)
        this.setState({
            task: newTask
          });
    }

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
                    task={ task }
                    handleDeleteItem={ this.handleDeleteItem }
                />
            </div>
        )
    }
}

export default Todo;