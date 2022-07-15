import React from "react";
import {
  PtgUiReactTable,
} from "calendar-update";
import { GRID_Data } from "./grid-data";
/* eslint-disable-next-line */
export interface PtgUiReactTableExampleProps {}

export function PtgUiReactTableExample(props: PtgUiReactTableExampleProps) {
 
  const columns = React.useMemo(
    () => [
      {
        Header: "Athlete",
        accessor: "athlete",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Sport",
        accessor: "sport",
      },
      {
        Header: "Gold",
        accessor: "gold",
      },
      {
        Header: "Silver",
        accessor: "silver",
      },
      {
        Header: "Total",
        accessor: "total",
      },
    ],
    []
  );
  return (
    <div className="w-100">
      <h4>{"REACT_TABLE"}</h4>
      <PtgUiReactTable columns={columns} data={GRID_Data} />
    </div>
  );
}

export default PtgUiReactTableExample;
