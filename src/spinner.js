import React from 'react'
import "semantic-ui-css/semantic.min.css";


const Spinner = (props) => {
    return (
        <div>
            <div class="ui active dimmer">
                <div class="ui text loader">{props.spinnerText}</div>
            </div>
            <p>{props.spinnerText}</p>
        </div>
    )
}

export default Spinner;