import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/mainStore";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  rootElement
);

// App is Parent Component It has two child  - childFirst and ChildSecond.
//  ChildFirst need to update the value and same value should get update in childSecond component.
// Use this project for reference and file structuring
// Research More on belows hooks
// 1. useSelector
// 2. useDispatch
