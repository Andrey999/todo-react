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
                done: false,     // для зачеркивания текста
                id: +new Date(), // id для таски
            };
            this.setState({
                task: task.concat(inputValue),
                value: '', // очищаем инпут
            });
        }  else return false;
    };
    
    // вводимые значения
    handleInputChange = (event) => {
        this.setState({  value: event.target.value  })
    };

    // перечеркивание  текста
    handleComplete = (index) => {
        const { task } = this.state
        this.setState({
            task: task.map(( item, i ) => {
              return i === index ? { ...item, done: !item.done } : item }
            )
          });
    }
   
    //  удаление  тасков
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
                    handleComplete={ this.handleComplete }
                />
            </div>
        )
    }
}

export default Todo;