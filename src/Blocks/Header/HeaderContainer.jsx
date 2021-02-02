import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'
import { setAuthUserData } from '../../redux/authReducer'
import { connect } from 'react-redux'

export class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
               if (response.data.resultCode === 0) {
                   let {id, login, email} = response.data.data
                   this.props.setAuthUserData(id, login, email)
               }
            })

    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)
