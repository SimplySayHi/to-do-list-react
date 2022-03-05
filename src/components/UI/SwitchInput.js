
import './SwitchInput.scss';
import PropTypes from 'prop-types';

const SwitchInput = props => {
    return (
        <div className="switch-wrapper">
            <div className="switch-label">{props.label}</div>
            <label className="switch">
                <input 
                    type="checkbox" 
                    className="switch-input"
                    checked={props.checked}
                    onChange={props.onChange}
                />
                <div className="switch-slider"></div>
            </label>
        </div>
    )
}

SwitchInput.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default SwitchInput
