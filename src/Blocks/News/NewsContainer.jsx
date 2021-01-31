import { connect } from 'react-redux'
import { setNewsCreator } from '../../redux/newsReducer'
import News from './News'

let mapStateToProps = (state) => {
    return {
        newsData: state.news.newsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (newsData) => {dispatch(setNewsCreator(newsData))}
    }
}

const NewsContainer =  connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer
