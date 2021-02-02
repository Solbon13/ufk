import React from 'react'
import s from './Pagination.module.css'

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalNewsCount / props.pageSize)

    let pagesCountArray = []
    for (let index = 1; index <= pagesCount; index++) {
        pagesCountArray.push(index);
    }

    // let pagesCountElements = pagesCountArray.map((pageCount) =>
    //     <span className={pageCount === 2 ? s.active : ''}
    //         onClick={() => props.getNews(pageCount)}> {pageCount} </span>)

    return (
        <div className={s.pagination}>
            {pagesCountArray.map((pageCount) =>{
                return (<span key={pageCount} className={pageCount === props.currentPage ? s.active : ''}
                    onClick={() => props.getNews(pageCount)}> {pageCount} </span>)
            })}
            {/* {pagesCountElements} */}
        </div>
    )
}

export default Pagination
