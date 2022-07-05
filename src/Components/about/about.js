import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>Abe Shaw</b> and I am currently Day Trader and I have an online course that teaches other people how to invest <a target="_blank" href="https://www.wealthytradersinvestment.com/"><b>wealthytradersinvestment</b></a>. In 2020 I recieved my Bachelor of Science degree in Advertising Management from Michigan State University. I started this development journey to learn how to code! </p>
                        <p className={classes.br}>Contact me @shawabra@msu.edu
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;