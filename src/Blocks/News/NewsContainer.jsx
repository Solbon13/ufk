import { connect } from 'react-redux'
import { setNews, setCurrentPage, setTotalNewsCount, toggleIsFetching } from '../../redux/newsReducer'
// import News from './News'
import NewsC from './NewsC'

let mapStateToProps = (state) => {
    return {
        newsData: state.news.newsData,
        //paginator
        pageSize: state.news.pageSize,
        totalNewsCount: state.news.totalNewsCount,
        currentPage: state.news.currentPage,
        isFetching: state.news.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setNews: (newsData) => { dispatch(setNewsCreator(newsData)) },
//         setCurrentPage: (currentPage) => {dispatch(setCurrentPageCreator(currentPage))},
//         setTotalNewsCount: (totalNewsCount) => {dispatch(setTotalNewsCountCreator(totalNewsCount))},
//         toggleIsFetchingCreator: (isFetching) => {dispatch(toggleIsFetchingCreator(isFetching))}
//     }
// }

const NewsContainer = connect(mapStateToProps, {
    setNews,
    setCurrentPage,
    setTotalNewsCount,
    toggleIsFetching
})(NewsC)

export default NewsContainer
