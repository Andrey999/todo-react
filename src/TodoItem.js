import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
        state = {
            isDone: false,
            isShowTask: false
        };

    handleLabelDecoration = (event) => {
        const { isDone } = this.state;
        if(event.currentTarget) {
            this.setState({  isDone: !isDone });

        }
    };

    render() {
        const { isDone, isShowTask } = this.state;
        const { propsValue, handleDeleteTask } = this.props;

        return (
            <div className='todoList'>
                <ul className="todolist__item">
                    {
                        propsValue.map(item => {
                            return <li key={item.id} className={isDone ? 'active' : null }>
                                <input type="checkbox" id={item.id} value={+new Date()} className="toggle" />
                                    <label htmlFor={item.id} onClick={this.handleLabelDecoration}>{item.value}</label>
                                    <span className="todolist__item-delete" onClick={handleDeleteTask(item.id)} >&times;</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}




// const TodoItem = ({propsValue, handleLabelDecoration, handleDeleteTask, isShowTask}) => {
//
//     console.log('handleLabelDecoration:', handleLabelDecoration,
//         'handleDeleteTask:', handleDeleteTask,
//         'isShowTask: ', isShowTask);
//
//     return (
//         <div className='todoList'>
//             <ul className="todolist__item">
//                 {
//                     propsValue.map(item => {
//                         return <li key={item.id}>
//                             { isShowTask === true ? <div><input type="checkbox" id={item.id} className="toggle"/>
//                                 <label htmlFor={item.id} onClick={handleLabelDecoration}>{item.value}</label>
//                                 <span className="todolist__item-delete" onClick={handleDeleteTask} >&times;</span>
//                             </div> : null
//                             }
//                         </li>
//                     })
//                 }
//             </ul>
//         </div>
//     );
// };

export default TodoItem;
