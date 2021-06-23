import * as React from "react";
import * as serviceWorker from './serviceWorker'

import App from "./App";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

serviceWorker.register();