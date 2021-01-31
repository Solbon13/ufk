import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Docs from '../../Blocks/Docs/Docs'

import Filters from '../../Blocks/Filters/Filters'
import Forum from '../../Blocks/Forum/Forum'
import Header from '../../Blocks/Header/Header'
import News from '../../Blocks/News/News'

const Main = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Filters dispatch={props.dispatch}
                filterText = {props.state.filterText}/>
                <Route exact path='/' render ={()=><News newsData={props.state.news.newsData}/>} />
                <Route path='/Docs' component={Docs} />
                <Route path='/forum' component={Forum} />
            </div>
        </BrowserRouter>
    )
}

export default Main
