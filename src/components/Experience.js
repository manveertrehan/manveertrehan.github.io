import React from 'react';

export default class Experience extends React.Component {

    render() {
        return (
            <div>
                <div className="sectionHeading">
                    Work Experience
                </div>

                <div className='jobBackground'>

                    <div className="rowLine">
                        <div className="listItem">
                            Amazon Web Services
                        </div>
                        <a href="https://aws.amazon.com/" target="_blank">
                            <img src={require('../resources/images/link.png')} className="link" alt="Open link in new tab symbol" />
                        </a>
                        <div className="date">
                            May 2024 - August 2024
                        </div>
                    </div>
                    <div className="jobTitle">
                        SDE Intern - AWS EBS Stats
                    </div>
                    <div className="listBody">
                        • Designed and implemented a federated query system that provides customers with the ability to query their
                        data across 30+ AWS regions in an efficient single query, rather than the original single-zone based querying.
                        <br></br>
                        • Created and reviewed thoroughly detailed documentation for building the federated query system and moving
                        towards productionalizing the POC.
                    </div>
                    <div className="divider">
                        _
                    </div>


                    <div className="rowLine">
                        <div className="listItem">
                            Amazon
                        </div>
                        <a href="https://amazon.ca/" target="_blank">
                            <img src={require('../resources/images/link.png')} className="link" alt="Open link in new tab symbol" />
                        </a>
                        <div className="date">
                            May 2023 - August 2023
                        </div>
                    </div>
                    <div className="jobTitle">
                        SDE Intern - Alexa Smart Properties
                    </div>
                    <div className="listBody">
                        • Completed full-stack internationalization work on a customer facing product that allows enterprise property
                        owners and managers to build and deploy custom Alexa Skills, resulting in extended functionality to Canada
                        and additional backend and frontend framework for extension to other future locales.
                        <br></br>
                        • Designed and implemented a script that saves dev effort of 2000+ lines of individually copy/pasting resource
                        strings for every new locale that is added to the service and translated through an internal translation tool.
                    </div>
                    <div className="divider">
                        _
                    </div>

                    <div className="rowLine">
                        <div className="listItem">
                            TCG
                        </div>
                        <a href="https://trehanconsulting.com/" target="_blank">
                            <img src={require('../resources/images/link.png')} className="link" alt="Open link in new tab symbol" />
                        </a>
                        <div className="date">
                            June 2021 - July 2021
                        </div>
                    </div>
                    <div className="jobTitle">
                        Web Developer Intern
                    </div>
                    <div className="listBody">
                        • Worked on the design, improvement, and addition of front and back end features on the company’s main
                        website
                        <br></br>
                        • Updated and added new content to the front end of the company’s webpage with JavaScript, HTML + CSS.
                        <br></br>
                        • Designed and implemented a mock Caf ́e kiosk menu app in React to serve as a demo
                    </div>
                    <div className="divider">
                        _
                    </div>

                    <div className="rowLine">
                        <div className="listItem">
                            Panda Coins
                        </div>
                        <a href="https://twitter.com/pandaspicytre2k" target="_blank">
                            <img src={require('../resources/images/link.png')} className="link" alt="Open link in new tab symbol" />
                        </a>
                        <div className="date">
                            Jun 2020 - Sep 2021
                        </div>
                    </div>
                    <div className="jobTitle">
                        Co-founder
                    </div>
                    <div className="listBody">
                        • Used GPC to tune and optimize scripts used by 100s of consoles daily to generate in-game tokens, resulting in
                        a 7% increase of token production.
                        <br></br>
                        • Designed and implemented an efficient order tracking process that increased both the reliability as well as the productivity of
                        the company, which led to over $300,000 of revenue in the first year.
                        <br></br>
                        • Accumulated 10,000+ total followers through strategic advertising.
                    </div>

                    <div className="divider">
                        _
                    </div>

                    <div className="rowLine">
                        <div className="listItem">
                            Canadian Tire
                        </div>
                        <div className="date">
                            Nov 2018 - Sep 2020
                        </div>
                    </div>
                    <div className="jobTitle">
                        Sales Associate
                    </div>
                    <div className="listBody">

                    </div>
                </div>
            </div>
        );

    }
}