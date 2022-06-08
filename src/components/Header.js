import React from 'react';


export default class Header extends React.Component {

    render() {
        return (
            <div className="rowLine">
                <div>
                    <h1 className="nameHeader">
                        Manveer Trehan
                    </h1>
                    <div className="subheading">
                        Computer Science @ the University of British Columbia
                    </div>
                </div>
                <div>
                    <a href="https://github.com/manveertrehan" target="_blank">
                        <img src={require('../images/ghlogo.png')} className="logo" alt="github_logo" />
                    </a>
                </div>
                <div>
                    <a href="mailto:manveertrehan01@gmail.com">
                        <img src={require('../images/maillogo.png')} className="logo" alt="mail_logo" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/manveertrehan/manveertrehan.github.io/raw/master/src/docs/mt.pdf" target="_blank">
                        <img src={require('../images/rlogo.png')} className="logo" alt="resume_logo" />
                    </a>
                </div>
                <div>
                    <img src={require('../images/mt.png')} className="img" alt="profile_pic" />
                </div>
            </div>
        );

    }
}