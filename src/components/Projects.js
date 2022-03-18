import React from 'react';

export default class Projects extends React.Component {

    render() {
        return (
            <div>
                <div className="sectionHeading">
                    Personal Projects
                </div>

                <div className="rowLine">
                    <div className="listItem">
                        NHL Playoffs Status Tracker
                </div>
                    <div>
                        <a href="https://manveertrehan.github.io/NHL-Playoff-Tracker/" target="_blank">
                            <img src={require('..//images/link.png')} className="link" alt="" />
                        </a>
                    </div>
                </div>
                <div className="jobTitle">
                    JavaScript + CSS + HTML
                </div>
                <div className="listBody">
                    After finding myself checking the NHL standings and calculating projections and records nearly every day, I
                    decided to create this web app to automate the process and save myself some of the headache that comes along
                    with being a Canucks fan.
                    This is a handy tool for NHL fans to keep up with the playoff race towards the end of the regular season.
                </div>
                <div className="imgBackground">
                    <img src={require('..//images/playofftracker.png')} alt=""
                        style={{
                            height: 350,
                            width: 700,
                            marginBottom: 3,
                            marginTop: 5,
                            marginLeft: 5, 
                        }} />
                </div>

                <div className="divider">
                    _
                </div>

                <div className="rowLine">
                    <div className="listItem">
                        Coin Order Tracker
                </div>
                    <div>
                        <a href="https://manveertrehan.github.io/Coin-Order-Tracker/" target="_blank">
                            <img src={require('..//images/link.png')} className="link" alt="" />
                        </a>
                    </div>
                </div>
                <div className="jobTitle">
                    JavaScript + CSS + HTML
                </div>
                <div className="listBody">
                    React app for NBA 2K MyTeam points and Madden NFL MUT coin distributors that provides a simple way
                    to organize and track orders in the short term. Built out of self-need during my time distributing virtual coins
                    to hundreds of frequent customers
                </div>
                <div className="imgBackground">
                    <img src={require('..//images/ordertracker.png')} alt=""
                        style={{
                            height: 700,
                            width: 700,
                            marginBottom: 3,
                            marginTop: 5,
                            marginLeft: 5, 
                        }} />
                </div>
            </div>
        );

    }
}