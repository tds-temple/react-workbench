//NPM
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import registerServiceWorker from './functions/registerServiceWorker'

//Components
import App from './components/app'

//CSS
import './styles/index.css'

//Redux Store
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)
//registerServiceWorker()
