import axios from 'axios'
import React, { Component } from 'react'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

class NewsC extends React.Component {
    getNews = () => {
        axios.get('http://').then(response => {this.props.setNews(response.data.newsData)})
    }

    newsElements = this.props.newsData.map(newData =>
        <ThemaForum key={newData.id} text={newData.text} id={newData.id} />)

    render(){
        return (
            <div>
                <button onClick={this.props.getNews}>get news</button>
                {this.newsElements}
            </div>
        )
    }
}

export default NewsC
