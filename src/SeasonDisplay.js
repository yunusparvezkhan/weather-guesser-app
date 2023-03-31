import React from 'react';
import "./SeasonDisplay.css";
import "semantic-ui-css/semantic.min.css";

const seasonConfig = {
    summer: {
        text: "whoa, it's really hot, let's hit the beach!!",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it's cold, turn on the heaters!!",
        iconName: "snowflakes"
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
    console.log(season)
    // let text = "";
    // let icon = "";
    // const seasonIcon = () => {
    //     if (season == "Winter") {
    //         text = "burrr! it's chilly";
    //         icon = "snowflake";
    //     } else {
    //         text = "whoa, lets hit the beach!!";
    //         icon = "sun";
    //     }
    // }
    // seasonIcon();

    const { text, iconName } = seasonConfig[season];

    return (
        <div id="container">
            <i className={`${iconName} icon`} />
            <h2 id="responce">{text}</h2>
            <i className={`${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;