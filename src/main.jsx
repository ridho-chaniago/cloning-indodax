import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from './component/Pages/Home';
// import { Provider } from 'react-redux'
// import store from '../belajarRedux/redux/store.js'
// import Apps from '../belajarRedux/redux/Apps.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>

  </React.StrictMode>,
)
