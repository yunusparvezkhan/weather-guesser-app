import React from 'react'
import "semantic-ui-css/semantic.min.css";


const Spinner = (props) => {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{props.spinnerText}</div>
            </div>
            <p>{props.spinnerText}</p>
        </div>
    )
}

Spinner.defaultProps = {
    spinnerText: "Loading..."
}

export default Spinner;