import React from 'react'
import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {
    state = { akhharekha: null, error: null, msg: "loading" }

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ msg: "", akhharekha: position.coords.latitude }),
            (err) => this.setState({ msg: null, error: err.message })
        );

    };

    componentDidUpdate() {

    }


    renderContent() {
        if (this.state.akhharekha == null && this.state.error !== null) {
            // return <div>{this.state.msg}{this.state.error}</div>;
            return <div><SeasonDisplay msg={this.state.msg} res={"Accounted Error: " + this.state.error} /></div>;
        } else if (this.state.error == null && this.state.akhharekha !== null) {
            // return <div>{this.state.msg}{this.state.akhharekha}</div>;
            return <div><SeasonDisplay msg={this.state.msg} res={this.state.akhharekha} /></div>;
        } else if (this.state.error == null && this.state.akhharekha == null) {
            return <div><SeasonDisplay msg={this.state.msg} res={null} /></div>;
        }
    }

    render() {
        return <div>{this.renderContent()}</div>
    }
}

export default App;