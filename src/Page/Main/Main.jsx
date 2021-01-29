import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Docs from '../../Blocks/Docs/Docs'

import Filters from '../../Blocks/Filters/Filters'
import Forum from '../../Blocks/Forum/Forum'
import Header from '../../Blocks/Header/Header'
import News from '../../Blocks/News/News'

const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Filters />
                <Route exact path='/' component={News} />
                <Route path='/Docs' component={Docs} />
                <Route path='/forum' component={Forum} />
            </div>
        </BrowserRouter>
    )
}

export default Main
