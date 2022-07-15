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
                            TCG
                        </div>
                        <a href="https://trehanconsulting.com/" target="_blank">
                            <img src={require('..//images/link.png')} className="link" alt="Open link in new tab symbol" />
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
                    </div>
                    <div className="divider">
                        _
                    </div>

                    <div className="rowLine">
                        <div className="listItem">
                            Panda Coins
                        </div>
                        <a href="https://twitter.com/pandaspicytre2k" target="_blank">
                            <img src={require('..//images/link.png')} className="link" alt="Open link in new tab symbol" />
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
                        • Designed and implemented an efficient process that increased both the reliability as well as the productivity of
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