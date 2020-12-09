import React from "react";
import { Grid } from "../../Grid";
import DWChart from "react-datawrapper-chart";

function Landing() {
  return (
    <div>
      Landing Scaffolding...
      <div>
        <DWChart title="Map" src="//datawrapper.dwcdn.net/7e1Ry/1/"/>
      </div>
      <div>
        <DWChart title="Map"src="//datawrapper.dwcdn.net/5hALS/1/"/>
      </div>
      <Grid/>
    </div>
  );
}

export default Landing;