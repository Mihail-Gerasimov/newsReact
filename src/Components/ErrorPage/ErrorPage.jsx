import React, { Component } from 'react';
import logo from "./error.png";
import "./ErrorPage.css";

class NotFound extends Component {
    render() {
        return (
            <div className='imageError'>
                <img src={logo} alt="img404" className='imageError' />
                <h1 className='textError'>ВАША СТРАНИЦА НЕ ОТОБРАЗИЛАСЬ, ПОТОМУ ЧТО, ДА... ВОТ ТАК ВОТ!</h1>
            </div>
        );
    }
}

export default NotFound;