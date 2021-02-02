import React from 'react'
import preloader from './../../assets/images/preloader.gif'

const Preloader = () => {
    return (
        <div>
           <img src={preloader} style={{height: '50px'}}/>
           Идёт загрузка...
        </div>
    )
}

export default Preloader
