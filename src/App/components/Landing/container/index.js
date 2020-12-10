import React from "react";
import { Grid, Footer } from "../../index";
import DWChart from "react-datawrapper-chart";
import { bullyingColumns, absentColumns, allColumns } from "../../../config";
import "../assets/style.less";

function Landing() {
  return (

    <div className="landing">
      <h1>LEONEL VERGARA Capstone</h1>
      <div className="nyc-map-graph">
        <DWChart title="Map" src="//datawrapper.dwcdn.net/7e1Ry/1/"/>
        <DWChart title="Map"src="//datawrapper.dwcdn.net/5hALS/1/"/>
      </div>
      <Grid
        endPoint="bully"
        columns={bullyingColumns}
        header="2017 NYC Public School Incidents"
      />
      <Grid
        endPoint="absent"
        columns={absentColumns}
        header="2017 NYC Public School Absences"
      />
      <Grid
        endPoint="all"
        columns={allColumns}
        header="2017 NYC Public School Incidents/Absences"      
      />
      <Footer/>
    </div>
  );
}

export default Landing;