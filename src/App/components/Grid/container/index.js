import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import axios from "axios";
import { columnHeaders } from "../config";

function Grid() {
  const [row, setRows] = useState([]);

  const getRows = () => {
    axios
    .get("/bully")
    .then((res) => {
      const { data }  = res;

      setRows(data);
    })
   };
   
  useEffect(() => {
    getRows();
  }, []);


  return (
    <div className="ag-theme-alpine" style={ { height: "600px", width: "1000px" } }>
      <AgGridReact
        rowData={row}
        columnDefs={columnHeaders}
        domLayout="domLayout"
        defaultColDef={
          {
            filter: true,
            sortable: true,
            resizable: true,
            floatingFilter: true,
          }
        }
      />
    </div>
  );
}

export default Grid;