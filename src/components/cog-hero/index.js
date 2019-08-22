import React from 'react';

import './_cog-hero.scss'
import { Link } from 'gatsby';

const CogHero = () => (
    <div className="cog-hero jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-4">Discover Crank Cogs</h1>
            <h3 className="lead">No-Code / Low-Code SaaS Test Automation</h3>
            <Link className="btn btn-primary" to="/intro">What is Crank?</Link>
            <a className="btn btn-outline-secondary" href="https://crank.automatoninc.com" role="button">Build a Cog</a>
        </div>
    </div>
);

export default CogHero;
