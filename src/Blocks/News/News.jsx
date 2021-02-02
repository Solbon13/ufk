import React from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

const News = (props) => {

    let newsElements = props.newsData.map(newData =>
        <ThemaForum key={newData.id} text={newData.name} id={newData.id} />)

    return (
        <div>
            <Pagination />
            {newsElements}
        </div>
    )
}

export default News
