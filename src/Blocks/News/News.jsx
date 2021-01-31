import axios from 'axios'
import React from 'react'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

const News = (props) => {
    let getNews = () => {
        axios.get('http://').then(response => {props.setNews(response.data.newsData)})
    }

    let newsElements = props.newsData.map(newData =>
        <ThemaForum key={newData.id} text={newData.text} id={newData.id} />)

    return (
        <div>
            <button onClick={getNews}>get news</button>
            {newsElements}
        </div>
    )
}

export default News
