import React from 'react'

const NewDetail = (props) => {
    return (
        <div>
            {props.newDetail ? props.newDetail.fullName : ''}
        </div>
    )
}

export default NewDetail

