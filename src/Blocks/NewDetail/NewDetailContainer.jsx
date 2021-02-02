import React from 'react'
import { connect } from 'react-redux'
import NewDetail from './NewDetail'
import { setNewDetail } from '../../redux/newsReducer'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class NewDetailContainer extends React.Component {

    componentDidMount() {
        let docId = this.props.match.params.docId;
        if (!docId) docId = 2  //сделать редирект на главную страницу
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${docId}`)
            .then(response => {                
                this.props.setNewDetail(response.data)
            })

    }

    render() {
        console.log(this.props)
        return (
            <>
            <NewDetail {...this.props} newDetail={this.props.newDetail}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newDetail: state.news.newDetail
    }
}

let WithUrl = withRouter(NewDetailContainer)

export default connect(mapStateToProps, {setNewDetail})(WithUrl)
