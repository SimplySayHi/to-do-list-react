
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../store/todos-slice';
import Button from '../UI/Button';
import SwitchInput from '../UI/SwitchInput';
import './ToDoNew.scss';

const ToDoNew = () => {
    const dispatch = useDispatch();
    let [disableSubmitBtn, setDisableSubmitBtn] = useState(true);
    let [toDoText, setToDoText] = useState('');
    let [hasPriority, setHasPriority] = useState(false);
    let [showNewToDoModal, setShowNewToDoModal] = useState(false);

    useEffect(() => {
        setDisableSubmitBtn(toDoText.trim().length === 0);
    }, [toDoText]);

    const toDoTextChangeHandler = event => {
        setToDoText(event.target.value);
    }

    const priorityChangeHandler = event => {
        setHasPriority(event.target.checked);
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        const newToDo = {
            id: new Date().getTime(),
            text: toDoText,
            hasPriority: hasPriority,
            isCompleted: false
        };
        
        dispatch( todosActions.addToDo(newToDo) );
        closeNewToDoModal();
        setToDoText('');
        setHasPriority(false);
    }

    const openNewToDoModal = () => {
        setShowNewToDoModal(true);
    }

    const closeNewToDoModal = () => {
        setShowNewToDoModal(false);
    }

    return (
        <div className="todo-new">
            <Button type="button" className="todo-new__modal-button" onClick={openNewToDoModal}>
                New task <i className="todo-new__modal-button-sign plus"></i>
            </Button>
            <div className={`todo-new__form-wrapper ${showNewToDoModal ? 'show' : ''}`}>
                <div className="todo-new__header">
                    <span className="todo-new__header-title">New task</span>
                    <span className="todo-new__header-close" onClick={closeNewToDoModal}>
                        <i className="todo-new__modal-button-sign plus plus--x"></i>
                    </span>
                </div>
                <form className="todo-new__form" onSubmit={formSubmitHandler}>
                    <div className="todo-new__form-group todo-new__form-group--left">
                        <input type="text" value={toDoText} onChange={toDoTextChangeHandler} placeholder="Insert task title..." className="form-field" />
                    </div>
                    <div className="todo-new__form-group todo-new__form-group--right">
                        <SwitchInput checked={hasPriority} onChange={priorityChangeHandler} label="High priority" />
                        <Button type="submit" className="btn-light-blue todo-new__btn-submit" disabled={disableSubmitBtn}>ADD</Button>
                    </div>
                </form>
            </div>
            <div className="todo-new__modal_backdrop" onClick={closeNewToDoModal}></div>
        </div>
    )
}

export default ToDoNew
