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
        this.state = { akhharekha: null, error: null, msg: null, displaytext: "loading" }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ msg: "latitude:", akhharekha: position.coords.latitude })
            },
            (err) => this.setState({ msg: "error:", error: err.message })
        )



    }



    render() {

        if (this.state.akhharekha == null && this.state.error !== null) {
            this.setState({ displaytext: this.state.error })
        } else if (this.state.error == null && this.state.akhharekha !== null) {
            this.setState({ displaytext: this.state.akhharekha })
        }

        return (
            <div>
                {/* {this.state.msg} {this.state.akhharekha} {this.state.error} */}
                <h3>{this.state.msg}{this.state.displaytext}</h3>
            </div >
        )
    }
}

export default App;