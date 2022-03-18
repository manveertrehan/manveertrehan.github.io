import React from 'react';

export default class Experience extends React.Component {

    render() {
        return (
            <div>
                <div className="sectionHeading">
                    Work Experience
                </div>

                <div className="rowLine">
                    <div className="listItem">
                        TCG
                </div>
                    <div>
                        <a href="https://trehanconsulting.com/" target="_blank">
                            <img src={require('..//images/link.png')} className="link" alt="" />
                        </a>
                    </div>
                    <div className="date1">
                        May 2021 - Aug 2021
                </div>
                </div>
                <div className="jobTitle">
                    Web Developer Intern
                </div>
                <div className="listBody">
                    • Worked on the design, improvement, and addition of features to the company’s main website.
                </div>
                <div className="listBody">
                    • Worked in junction with co-workers in order to update and add new content to the website.
                </div>
                <div className="divider">
                    _
                </div>

                <div className="rowLine">
                    <div className="listItem">
                        Panda Coins
                </div>
                    <div>
                        <a href="https://twitter.com/pandaspicytre2k" target="_blank">
                            <img src={require('..//images/link.png')} className="link" alt="" />
                        </a>
                    </div>
                    <div className="date2">
                        Jun 2020 - Sep 2021
                </div>
                </div>
                <div className="jobTitle">
                    Co-founder
                </div>
                <div className="listBody">
                    • Tuned and optimized scripts that are ran on hundreds of video game consoles daily by manufacturers in order
                    to increase production of inventory by approx. 5%.
                </div>
                <div className="listBody">
                    • Marketed a video game currency/goods distribution business into becoming the top distributor on multiple
                    social platforms.
                </div>
            </div>
        );

    }
}