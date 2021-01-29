import React from 'react'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

const News = (props) => {

    let newsElements = props.newsData.map( newData => <ThemaForum text={newData.text} id={newData.id}/>)

    return (
        <div>
            {newsElements}
        </div>
    )
}

export default News
