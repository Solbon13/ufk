import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Docs from '../../Blocks/Docs/Docs'

import Filters from '../../Blocks/Filters/Filters'
import Forum from '../../Blocks/Forum/Forum'
import Header from '../../Blocks/Header/Header'
import News from '../../Blocks/News/News'

const Main = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Filters state={props.state} dispatch={props.dispatch}
                
                filterText = {props.state.filterText}/>
                <Route exact path='/' render ={()=><News newsData={props.state.newsData}/>} />
                <Route path='/Docs' component={Docs} />
                <Route path='/forum' component={Forum} />
            </div>
        </BrowserRouter>
    )
}

export default Main
