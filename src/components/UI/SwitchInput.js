
import './SwitchInput.scss';

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

export default SwitchInput
