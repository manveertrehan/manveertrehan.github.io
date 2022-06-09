import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

export default class Projects extends React.Component {

    render() {
        return (
            <div>
                <div className="sectionHeading">
                    Personal Projects
                </div>

                <div className='projectBackground'>
                    <div className="rowLine">
                        <div className="listItem">
                            Movie Predictor
                        </div>
                        <div>
                            <a href="https://github.com/manveertrehan/movie-predictor-app" target="_blank">
                                <img src={require('..//images/link.png')} className="link" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="jobTitle">
                        Python + HMTL + CSS
                    </div>
                    <div className="listBody">
                    This Movie Predictor uses Natural Language Processing and a RandomForestClassifier to
                    provide accurate predictions for text input about the plot of the movie. The model was
                    built using spaCy for NLP (lemmatization and selection of relevant parts of speech on movie 
                    synopses) and scikit-learn for other preprocessing and training of the final model.
                    </div>
                    <div>
                        <img src={require('..//images/moviepred.png')} className="movImg" alt="" />
                    </div>
                </div>

                <div className="divider">
                    _
                </div>

                <div className='projectBackground'>
                    <div className="rowLine">
                        <div className="listItem">
                            NHL Playoffs Status Tracker
                        </div>
                        <div>
                            <a href="https://github.com/manveertrehan/NHL-Playoff-Tracker" target="_blank">
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
                        <a href="https://manveertrehan.github.io/NHL-Playoff-Tracker/" target="_blank">Try it out!</a>
                    </div>
                    <div>
                        <img src={require('..//images/playofftracker.png')} className="nhlImg" alt="" />
                    </div>
                </div>

                <div className="divider">
                    _
                </div>

                <div className='projectBackground'>
                    <div className="rowLine">
                        <div className="listItem">
                            Coin Order Tracker
                        </div>
                        <div>
                            <a href="https://github.com/manveertrehan/Coin-Order-Tracker" target="_blank">
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
                        to hundreds of frequent customers. 
                        <a href="https://manveertrehan.github.io/Coin-Order-Tracker/" target="_blank">Try it out!</a>
                    </div>
                    <div>
                        <img src={require('..//images/ordertracker.png')} className="orderImg" alt="" />
                    </div>
                </div>
            </div>
        );

    }
}