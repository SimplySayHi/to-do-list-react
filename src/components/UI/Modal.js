
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import './Modal.scss';

const Backdrop = props => {
    return (
        <div className="modal__backdrop" onClick={props.onClose}></div>
    )
}

const ModalOverlay = props => {
    return (
        <div className={`modal ${props.className || ''}`}>
            <div className="modal__dialog">
                <div className="modal__content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const Modal = props => {
    const $portalEl = document.querySelector('#overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay className={props.className}>{props.children}</ModalOverlay>, $portalEl)}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, $portalEl)}
        </Fragment>
    )
}

export default Modal
