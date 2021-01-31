import React from 'react'
import ThemaForum from '../../Components/ThemaForum/ThemaForum'

const News = (props) => {

    let newsElements = props.newsData.map( newData => <ThemaForum key={newData.id} text={newData.text} id={newData.id}/>)

    return (
        <div>
            {newsElements}
        </div>
    )
}

export default News
