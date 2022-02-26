
import './Button.scss';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button
            type={props.type || 'button'}
            className={`btn ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button
