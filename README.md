# Redux React User Data App

This project is a simple React application that demonstrates state management using Redux Toolkit. It fetches and displays user data from an API (`JSONPlaceholder`) and showcases a clean architecture with reusable hooks and organized Redux logic.

## Features

- **State Management with Redux Toolkit**:
  - Async state handling with `createAsyncThunk`.
  - Centralized state storage with `configureStore`.
  - Custom Redux slices for modular code.
  
- **Reusable Custom Hook**:
  - Encapsulates logic for fetching user data and accessing Redux state.

- **API Integration**:
  - Fetch user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

- **React 18 Features**:
  - Uses `createRoot` for rendering the app.

- **Component-Based Architecture**:
  - Clean separation of UI components, state management, and API services.

---

## Project Structure

plaintext
src/
├── App.jsx                # Main React component
├── index.css              # Global styles
├── index.js               # Entry point of the app
├── hooks/
│   └── userHooks/         # Custom hooks like useFetchUserData
├── redux/
│   ├── store.js           # Redux store setup
│   ├── slices/            # Redux slices for state
│   └── actions/           # Redux async actions
├── utils/
│   └── userServices.js    # API calls and service functions
