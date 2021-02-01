import { connect } from 'react-redux'
import { setNewsCreator, setCurrentPageCreator, setTotalNewsCountCreator } from '../../redux/newsReducer'
import News from './News'
import NewsC from './NewsC'

let mapStateToProps = (state) => {
    return {
        newsData: state.news.newsData,
        //paginator
        pageSize: state.news.pageSize,
        totalNewsCount: state.news.totalNewsCount,
        currentPage: state.news.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (newsData) => { dispatch(setNewsCreator(newsData)) },
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageCreator(currentPage))},
        setTotalNewsCount: (totalNewsCount) => {dispatch(setTotalNewsCountCreator(totalNewsCount))}
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsC)

export default NewsContainer
