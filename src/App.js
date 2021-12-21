import React from "react";
import SongOverview from "./SongOverview";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
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
      </div>

      <SongOverview />
    </div>
  );
}

export default App;
