import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css'
import App from './pages/App'
import Main from './components/Main'
import ShowWork from './components/ShowWork'
import Error404 from './components/Error404'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
      <Route
        exact
        path={process.env.PUBLIC_URL + '/work/:id'}
        component={props => <ShowWork id={props.match.params.id} />}
      />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
