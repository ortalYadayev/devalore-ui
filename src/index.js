import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";
import store from "./store/index";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  rootElement
);
