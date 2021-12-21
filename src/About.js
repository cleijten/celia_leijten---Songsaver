import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>

      <h2>About Celia</h2>
      <p>
        Allrounder op het gebied van websites. 20+ jaar ervaring in:
        <ul>
          <li>webdesign</li>
          <li>marketing automation</li>
          <li>dtp</li>
          <li>en sinds kort front end development</li>
        </ul>
      </p>
    </div>
  );
}

export default About;
