import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import axios from "axios";
import "../assets/style.less";

function Grid(props) {
  const { columns, endPoint, header } = props;
  const [row, setRows] = useState([]);

  const getRows = () => {
    axios
      .get(endPoint)
      .then((res) => {
        const { data } = res;

        setRows(data);
      })
  };

  useEffect(() => {
    getRows();
  }, []);

  return (
    <div className="grid">
      <h1>{ header }</h1>
        <div className="ag-theme-alpine" style={ { height: "600px", width: "1200px" } }>
          <AgGridReact
            rowData={row}
            columnDefs={columns}
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
    </div>
  );
}

export default Grid;