import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store/store'

// icon font
import './assets/fonts/iconfont/iconfont.css'

import App from './pages/app/app'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.Fragment>
                {/* main application here */}
                <App />
                {/* placeholder of portal */}
                <div className="portal-set"></div>
            </React.Fragment>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
)

  // if (module.hot) {
  //     module.hot.accept('')
  // }
