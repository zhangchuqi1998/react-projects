// import the react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// get r4efeerence of the div with ID root
const el = document.getElementById('root');

// tell react to take control of the element
const root = ReactDOM.createRoot(el);

// show the component on the screen
root.render(<App />);