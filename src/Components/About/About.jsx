import React, { Component } from 'react';
import "./About.css";
import "./AboutMedia.css";
import grisha from "./grisha_s_ytra.png";

class About extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className='about-main'>
                        <img
                            src={grisha}
                            className="cardImg"
                            alt="profileGit"
                        />
                        <div className="card-body">
                            <h3>
                                Автор проекта: <br />
                                студент группы РПИС-91: <br />
                                <br /> <span>Герасимов Михаил Васильевич</span>
                            </h3>
                            <a href="https://github.com/iceb34r" className="button" target="blank">
                                Link ...GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;