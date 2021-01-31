import React from 'react'
import { Route } from 'react-router-dom'
import Docs from '../../Blocks/Docs/Docs'
import Filters from '../../Blocks/Filters/Filters'
import Forum from '../../Blocks/Forum/Forum'
import Header from '../../Blocks/Header/Header'
import NewsContainer from '../../Blocks/News/NewsContainer'


const Main = () => {
    return (      
            <div>
                <Header />
                <Route exact path='/' render={() =>
                    <>
                        <Filters />{/* продумать универсальность (пока по пути смотреть? или будет рисоваться в компонентах внизу?) */}
                        <NewsContainer />
                    </>} />
                <Route path='/Docs' component={Docs} />
                <Route path='/forum' component={Forum} />
            </div>
    )
}

export default Main
