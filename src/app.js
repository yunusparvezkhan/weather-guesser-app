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
    state = { akhharekha: null, error: null, msg: null, displaytext: "loading" }

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ msg: "latitude:", akhharekha: position.coords.latitude }),
            (err) => this.setState({ msg: "error:", error: err.message })
        );

    };

    componentDidUpdate() {

    }


    render() {

        if (this.state.akhharekha == null && this.state.error !== null) {
            return <div>{this.state.msg}{this.state.error}</div>;
        } else if (this.state.error == null && this.state.akhharekha !== null) {
            return <div>{this.state.msg}{this.state.akhharekha}</div>;
        }

    }
}

export default App;