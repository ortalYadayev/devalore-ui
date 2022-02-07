import Provider from "react-redux/lib/components/Provider";
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import store from "./store/index";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  rootElement
);
