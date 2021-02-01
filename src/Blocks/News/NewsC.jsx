import axios from 'axios'
import React, { Component } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

class NewsC extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNews(response.data.items)
                this.props.setTotalNewsCount(response.data.totalCount)
            })
    }


    render() {

        return (
            <div>
                <Pagination 
                totalNewsCount={this.props.totalNewsCount} currentPage={this.props.currentPage} pageSize={this.props.pageSize} 
                setNews={this.props.setNews} 
                setCurrentPage={this.props.setCurrentPage}
                />
                {this.props.newsData.map(newData => {
                    return <ThemaForum key={newData.id} name={newData.name} id={newData.id}/>
                })}
            </div>
        )
    }
}

export default NewsC
