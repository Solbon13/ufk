import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from '../../Components/Pagination/Pagination'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

import { setNewsCreator, setCurrentPageCreator, setTotalNewsCountCreator } from '../../redux/newsReducer'


class NewsC extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNews(response.data.items)
                this.props.setTotalNewsCount(response.data.totalCount)
            })
    }

    getNews = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNews(response.data.items)
                this.props.setCurrentPage(currentPage)
            })
    }

    render() {

        return (
            <div>
                <NewPagination getNews={this.getNews}/>
                {this.props.newsData.map(newData => {
                    return <ThemaForum key={newData.id} name={newData.name} id={newData.id}/>
                })}
            </div>
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
        setNews: (newsData) => { dispatch(setNewsCreator(newsData)) },
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageCreator(currentPage))},
    }
}

const NewPagination = connect(mapStateToProps, mapDispatchToProps)(Pagination)

export default NewsC
