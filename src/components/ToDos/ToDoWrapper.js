
import ToDoNew from './ToDoNew';
import ToDoList from './ToDoList';
import './ToDoWrapper.scss';

const sortByPriority = list => list.sort((x, y) => Number(y.hasPriority) - Number(x.hasPriority));

const ToDoWrapper = (props) => {
    const inProgressItems = sortByPriority( props.items.filter(item => !item.isCompleted) );
    const completedItems = sortByPriority( props.items.filter(item => item.isCompleted) );

    return (
        <section className="todo-list__wrapper">
            <div className="todo-list__container">
                <h2 className="todo-list__main-title">
                    MyTrack
                </h2>
                <ToDoNew />
                <ToDoList title="In progress" items={inProgressItems} />
                <ToDoList title="Done" items={completedItems} />
                {/* <portal-target name="todo-edit-modal" multiple></portal-target> */}
            </div>
        </section>
    )
}

export default ToDoWrapper
