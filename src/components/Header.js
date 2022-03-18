import React from 'react';
import Pdf from '../docs/resume.pdf';


export default class Header extends React.Component {

    render() {
        return (
            <div className="rowLine">
                <div>
                    <h1 className="nameHeader">
                        Manveer Trehan
                </h1>
                    <div className="subheading">
                        3rd year Computer Science student @ the University of British Columbia
                </div>
                </div>
                <div>
                    <a href="https://github.com/manveertrehan" target="_blank">
                        <img src={require('../images/ghlogo.png')} className="logo" alt="" />
                    </a>
                </div>
                <div>
                    <a href="mailto:manveertrehan01@gmail.com">
                        <img src={require('../images/maillogo.png')} className="logo" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/manveertrehan/manveertrehan.github.io/raw/master/src/docs/mtresume.pdf" target="_blank">
                        <img src={require('../images/rlogo.png')} className="logo" alt="" />
                    </a>
                </div>
                <div>
                    <img src={require('../images/mt.png')} className="img" alt="" />
                </div>
            </div>
        );

    }
}