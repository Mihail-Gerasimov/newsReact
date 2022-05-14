import React, { Component } from 'react';
import "./AboutMe.css";
import "./AboutMeMedia.css";
import floweR from "./flower.jpg";

class AboutMe extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className='about-main'>
                        <img
                            src={floweR}
                            className="cardImg"
                            alt="profileGit"
                        />
                        <div className="card-body">
                            <h3>
                                Автор проекта: <br />
                                студент группы РПИС-91: <br />
                                <br /> <span>Герасимов Михаил Васильевич</span>
                            </h3>
                            <a href="https://github.com/Mihail-Gerasimov" className="button" target="blank">
                                Link ...GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutMe;