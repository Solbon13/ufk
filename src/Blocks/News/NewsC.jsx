import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Pagination from '../../Components/Pagination/Pagination'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

import { setNews, setCurrentPage } from '../../redux/newsReducer'
import Preloader from '../../Components/Preloader/Preloader'


class NewsC extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNews(response.data.items)
                this.props.setTotalNewsCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })

    }

    getNews = (currentPage) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setNews(response.data.items)
                this.props.setCurrentPage(currentPage)
            })
    }

    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : (
                <>
                <NewPagination getNews={this.getNews} />
                {this.props.newsData.map(newData => {
                    return <ThemaForum key={newData.id} name={newData.name} id={newData.id} />
                })}
                </>
                )}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        pageSize: state.news.pageSize,
        totalNewsCount: state.news.totalNewsCount,
        currentPage: state.news.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (newsData) => { dispatch(setNews(newsData)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
    }
}

const NewPagination = connect(mapStateToProps, mapDispatchToProps)(Pagination)

export default NewsC
