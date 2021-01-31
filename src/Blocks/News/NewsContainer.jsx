import { connect } from 'react-redux'
import News from './News'

let mapStateToProps = (state) => {
    return {
        newsData: state.news.newsData
    }
}

let mapDispatchToProps = () => {
    return {
        
    }
}

const NewsContainer =  connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer
