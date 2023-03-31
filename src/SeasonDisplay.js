import React from 'react';
import "./SeasonDisplay.css";
import "semantic-ui-css/semantic.min.css";

const getSeason = (lat, month) => {
    if (month >= 3 && month < 9) {
        return lat > 0 ? "Summer" : "Winter";
    } else {
        return lat < 0 ? "Summer" : "Winter";
    }

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.res, new Date().getMonth());
    let text = "";
    let icon = "";
    const seasonIcon = () => {
        if (season == "Winter") {
            text = "burrr! it's chilly";
            icon = "snowflake";
        } else {
            text = "whoa, lets hit the beach!!";
            icon = "sun";
        }
    }
    seasonIcon();
    return (
        <div id="container">
            <h2 id="responce">{text}</h2>
            <i className={`${icon} icon`} />
            <i className={`${icon} icon`} />
        </div>
    )
}

export default SeasonDisplay;