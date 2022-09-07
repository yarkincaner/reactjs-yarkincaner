import "./index.css";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context/context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

reportWebVitals(console.log);
