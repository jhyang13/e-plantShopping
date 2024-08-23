import React from 'react' // Importing React library
import ReactDOM from 'react-dom/client' // Importing ReactDOM for rendering the app
import App from './App.jsx' // Importing the main App component
import './index.css' // Importing global CSS styles
import { Provider } from 'react-redux' // Importing Provider component from react-redux for state management
import store from './store.js' // Importing the Redux store

// Rendering the React app and wrapping it with the Redux Provider for state management
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}> 
      <App /> 
    </Provider>
  </React.StrictMode>,
)
