
import ToDoItem from './ToDoItem';
import './ToDoList.scss';

const ToDoList = props => {
    return (
        <div className="todo-list__inner">
            <div className="todo-list__header">
                <span className="todo-list__header-title">{props.title}</span>
                <span className="todo-list__header-counter">{props.items.length}</span>
            </div>
            <div className="todo-list">
                {
                    props.items.map(item => <ToDoItem item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default ToDoList
