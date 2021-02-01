import axios from 'axios'
import React from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

const News = (props) => {
    let getNews = () => {
        // axios.get('https://social-network.samuraijs.com/api/1.0/users')
        //     .then(response => { props.setNews(response.data.items) })
    }

    let newsElements = props.newsData.map(newData =>
        <ThemaForum key={newData.id} text={newData.name} id={newData.id} />)

    return (
        <div>
            <button onClick={getNews}>get news</button>
            <Pagination />
            {newsElements}
        </div>
    )
}

export default News
