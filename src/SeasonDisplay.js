import React from 'react'
import "./SeasonDisplay.css"

const getSeason = (lat, month) => {
    if (month >= 3 && month < 9) {
        return lat > 0 ? "You are in Summer" : "You are in Winter";
    } else {
        return lat < 0 ? "You are in Summer" : "You are in Winter";
    }

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.res, new Date().getMonth())
    return (
        <div id="container">
            <h2 id="responce">{season}</h2>
        </div>
    )
}

export default SeasonDisplay;