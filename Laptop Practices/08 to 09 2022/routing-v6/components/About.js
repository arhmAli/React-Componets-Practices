import React from 'react';

import { Link } from 'react-router-dom';
import './about.scss'
const About = () => {
    return (
        <div><h1>About</h1>

            <Link to="/about/1">1st Profile</Link>
            <br />
            <Link to="/about/2">2nd Profile</Link>
        </div>
    )
}
export default About