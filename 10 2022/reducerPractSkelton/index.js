// suppose this is the main component of our app so we will import
import { Provider } from 'react'

import React from 'react'
import { Provider } from 'react-redux'
import { MainStore } from 'MainStore'

function index() {
    return (
        <Provider store={Mainstore}>
            <div>index</div>
        </Provider>
    )
}

export default index