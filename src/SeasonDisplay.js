import React from 'react';
import "./SeasonDisplay.css";
import "semantic-ui-css/semantic.min.css";

const seasonConfig = {
    summer: {
        text: "whoa, it's really hot, let's hit the beach!!",
        iconName: "sun",
        iconColor: "red"
    },
    winter: {
        text: "Burr, it's cold, turn on the heaters!!",
        iconName: "snowflake",
        iconColor: "blue"
    }
}

const getSeason = (lat, month) => {
    if (month >= 3 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat < 0 ? "summer" : "winter";
    }

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.res, new Date().getMonth());
    const { text, iconName, iconColor } = seasonConfig[season];

    return (
        <div id="container">
            <i className={`${iconName} icon massive ${iconColor}`} id="icon1" />
            <h2 id="responce">{text}</h2>
            <i className={`${iconName} icon massive ${iconColor}`} id="icon2" />
        </div>
    )
}

export default SeasonDisplay;