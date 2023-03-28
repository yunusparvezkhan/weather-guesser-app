import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app"

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <App />
    </div>

)

// const App = () => {

//     return (
//     )
// }

// ReactDOM.render(<App />, document.querySelector("#root"))
reportWebVitals();
