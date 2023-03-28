import React from 'react'
import ReactDOM from "react-dom/client";

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => { console.log(position) },
//         (err) => { console.log(err) }
//     );

//     return (
//         <div>App</div>
//     )
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { akhharekha: null }

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ akhharekha: position.coords.latitude }),
            () => this.setState({ akhharekha: "Couldn't fetch location" })
        )
    }

    render() {
        return (
            <div>
                Latitude: {this.state.akhharekha}
            </div>
        )
    }
}

export default App;