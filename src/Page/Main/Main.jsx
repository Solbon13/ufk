import React from 'react'
import { Route } from 'react-router-dom'
import Filters from '../../Blocks/Filters/Filters'
import Forum from '../../Blocks/Forum/Forum'
import Header from '../../Blocks/Header/Header'
import NewDetailContainer from '../../Blocks/NewDetail/NewDetailContainer'
import NewsContainer from '../../Blocks/News/NewsContainer'


const Main = () => {
    return (      
            <div>
                <Header />
                <Route exact path='/main' render={() =>
                    <>
                        <Filters />{/* продумать универсальность (пока по пути смотреть? или будет рисоваться в компонентах внизу?) */}
                        <NewsContainer />
                    </>} />
                <Route path='/docs/:docId?' component={NewDetailContainer} />
                <Route path='/forum' component={Forum} />
            </div>
    )
}

export default Main
