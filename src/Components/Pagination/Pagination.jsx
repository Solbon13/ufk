import axios from 'axios'
import React from 'react'
import s from './Pagination.module.css'

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalNewsCount / props.pageSize)

    let pagesCountArray = []
    for (let index = 1; index <= pagesCount; index++) {
        pagesCountArray.push(index);
    }

    let getNews = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.pageSize}`)
            .then(response => { 
                props.setNews(response.data.items) 
                props.setCurrentPage(currentPage)
            })
    }

    let pagesCountElements = pagesCountArray.map((pageCount) =>
        <span className={pageCount === 2 ? s.active : ''} 
        onClick= {() => getNews(pageCount)}> {pageCount} </span>)

    return (
        <div className={s.pagination}>
            {pagesCountArray.map((pageCount) =>
        <span className={pageCount === props.currentPage ? s.active : ''} 
        onClick= {() => getNews(pageCount)}> {pageCount} </span>)}
            {/* {pagesCountElements} */}
            {/* <span className={s.active}>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span> */}
        </div>
    )
}

export default Pagination
