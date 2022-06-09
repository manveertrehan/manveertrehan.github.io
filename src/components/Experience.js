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
                            <img src={require('..//images/link.png')} className="link" alt="" />
                        </a>
                        <div className="date">
                            May 2021 - Aug 2021
                        </div>
                    </div>
                    <div className="jobTitle">
                        Web Developer Intern
                    </div>
                    <div className="listBody">
                        • Worked on the design, improvement, and addition of front and back end features on the company’s main
                        website
                        <br></br>
                        • Updated and added new content to the front end of the company’s webpage with HTML + CSS.
                    </div>
                    <div className="divider">
                        _
                    </div>

                    <div className="rowLine">
                        <div className="listItem">
                            Panda Coins
                        </div>
                        <a href="https://twitter.com/pandaspicytre2k" target="_blank">
                            <img src={require('..//images/link.png')} className="link" alt="" />
                        </a>
                        <div className="date">
                            Jun 2020 - Sep 2021
                        </div>
                    </div>
                    <div className="jobTitle">
                        Co-founder
                    </div>
                    <div className="listBody">
                        • Tuned and optimized GPC scripts that run on hundreds of video game consoles daily by manufacturers in
                        order to increase production of inventory by approx. 5-7% while reducing the risk of detection of our bots by
                        moderators.
                        <br></br>
                        • Marketed a video game currency/goods distribution business into becoming the top distributor on multiple
                        social platforms with 20-30 daily customers and over $300,000 of revenue in year 1.
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