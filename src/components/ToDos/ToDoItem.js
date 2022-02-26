
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../store/todos-slice';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import './ToDoItem.scss';
import iconTrash from '../../assets/icon-trash.svg';
import PropTypes from 'prop-types';

const ToDoItem = props => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [isCompleted, setIsCompleted] = useState(props.item.isCompleted);
    const dispatch = useDispatch();
    const todoId = props.item.id;

    useEffect(() => {
        dispatch(todosActions.setCompleteness({ todoId, isCompleted}));
    }, [todoId, isCompleted]);

    const switchCompleted = event => {
        setIsCompleted(event.target.checked);
    };

    const openEditModal = event => {
        if( window.innerWidth >= 992 ){
            return
        }
        if( !props.item.isCompleted ){
            event.preventDefault();
            setShowEditModal(true);
        }
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const deleteItem = () => {
        dispatch(todosActions.deleteToDo(todoId));
        closeEditModal();
    };

    const setCompleted = () => {
        setIsCompleted(true);
        closeEditModal();
    };
    
    return (
        <div className="todo-item">
        <div className="todo-item__inner">
            <div className="todo-item__inner-body">
                <input id={todoId} type="checkbox" checked={props.item.isCompleted} onChange={switchCompleted} />
                <label htmlFor={todoId} className="todo-item__inner-body" onClick={openEditModal}>
                    <span className={`todo-item__priority ${props.item.hasPriority ? '--on' : ''}`}></span>
                    <div className="todo-item__text">
                        { props.item.text }
                    </div>
                </label>
            </div>
            <button className="todo-item__delete" onClick={deleteItem}>
                <img src={iconTrash} width="16" alt="" />
            </button>
        </div>
        {!props.item.isCompleted && showEditModal && 
            <Modal className="todo-edit-modal show">
                <div className="modal__header">
                    <div className="modal__header__title">
                        <span className="modal__header__title__priority todo-item__priority"></span>
                        <div className="modal__header__title__body">Task</div>
                    </div>
                    <Button className="modal__header__close" onClick={closeEditModal}>
                        <i className="modal__button-sign plus plus--x"></i>
                    </Button>
                </div>
                <div className="modal__body">
                    { props.item.text }
                </div>
                <div className="modal__footer">
                    <Button className="todo-edit-modal__btn-delete" onClick={deleteItem}>
                        <img src={iconTrash} width="16" alt="" />
                    </Button>
                    <Button className="btn-green" onClick={setCompleted}>Complete</Button>
                </div>
            </Modal>
        }
    </div>
    )
}

ToDoItem.propTypes = {
    // item: PropTypes.exact({
    item: PropTypes.shape({
        isCompleted: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        hasPriority: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}

export default ToDoItem
