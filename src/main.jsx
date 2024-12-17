// Import the `createRoot` function from React DOM to enable rendering the React app into the DOM.
import { createRoot } from "react-dom/client";

// Import the global CSS file to apply styles to the application.
import "./index.css";

// Import the main `App` component, which serves as the entry point of the React application.
import App from "./App.jsx";

// Import the `Provider` component from React Redux.
// This component makes the Redux store available to the entire React component tree.
import { Provider } from "react-redux";

// Import the Redux store, which contains the application's state and reducers.
import store from "./redux/store.js";

// Render the React application into the DOM.
// - `createRoot`: Initializes React's rendering system in the DOM element with the ID "root".
// - The `<Provider>` component wraps the `<App>` component, allowing all child components
//   to access the Redux store via hooks like `useSelector` and `useDispatch`.
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
