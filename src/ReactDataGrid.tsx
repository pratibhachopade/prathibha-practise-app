import React, { useMemo, useState } from 'react'
import { PtgUiAgGrid,PtgUiReactDataGrid} from 'calendar-update'
import { GRID_Data } from './grid-data';
export const ReactDataGrid = () => {
 
   const onClick = (event: any) => {
     alert("Button Clicked");
   };
   const GRID_DATA: any = [
     {
       id: 1,
       athlete: "Michael Phelps",
       age: 23,
       country: "United States",
       year: 2008,
       date: "24/08/2008",
       sport: "Swimming",
       gold: 8,
       silver: 0,
       total: 8,
     },
     {
       id: 2,
       athlete: "Michael Phelps",
       age: 19,
       country: "United States",
       year: 2004,
       date: "29/08/2004",
       sport: "Swimming",
       gold: 6,
       silver: 2,
       total: 8,
     },
     {
       id: 3,
       athlete: "Michael Phelps",
       age: 27,
       country: "United States",
       year: 2012,
       date: "12/08/2012",
       sport: "Swimming",
       gold: 4,
       silver: 2,
       total: 6,
     },
     {
       id: 4,
       athlete: "Natalie Coughlin",
       age: 25,
       country: "United States",
       year: 2008,
       date: "24/08/2008",
       sport: "Swimming",
       gold: 2,
       silver: 2,
       total: 4,
     },
     {
       id: 5,
       athlete: "Aleksey Nemov",
       age: 24,
       country: "Russia",
       year: 2000,
       date: "01/10/2000",
       sport: "Gymnastics",
       gold: 2,
       silver: 1,
       total: 3,
     },
     {
       id: 6,
       athlete: "Alicia Coutts",
       age: 24,
       country: "Australia",
       year: 2012,
       date: "12/08/2012",
       sport: "Swimming",
       gold: 1,
       silver: 3,
       total: 4,
     },
     {
       id: 7,
       athlete: "Missy Franklin",
       age: 17,
       country: "United States",
       year: 2012,
       date: "12/08/2012",
       sport: "Swimming",
       gold: 4,
       silver: 0,
       total: 4,
     },
     {
       id: 8,
       athlete: "Ryan Lochte",
       age: 27,
       country: "United States",
       year: 2012,
       date: "12/08/2012",
       sport: "Swimming",
       gold: 2,
       silver: 3,
       total: 5,
     },
     {
       id: 9,
       athlete: "Allison Schmitt",
       age: 22,
       country: "United States",
       year: 2012,
       date: "12/08/2012",
       sport: "Swimming",
       gold: 3,
       silver: 1,
       total: 4,
     },
     {
       id: 10,
       athlete: "Natalie Coughlin",
       age: 21,
       country: "United States",
       year: 2004,
       date: "29/08/2004",
       sport: "Swimming",
       gold: 2,
       silver: 2,
       total: 4,
     },
     {
       id: 11,
       athlete: "Ian Thorpe",
       age: 17,
       country: "Australia",
       year: 2000,
       date: "01/10/2000",
       sport: "Swimming",
       gold: 3,
       silver: 2,
       total: 5,
     },
     
     {
       id: 32,
       athlete: "Aliya Mustafina54",
       age: 17,
       country: "Russia",
       year: 2012,
       date: "12/08/2012",
       sport: "Gymnastics",
       gold: 1,
       silver: 1,
       total: 2,
     },
   ];
  
  const autoGroupColumnDef = useMemo(
    () => ({
      field: "athlete",
      cellRendererParams: {
        checkbox: true,
      },
    }),
    []
  );
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "athlete",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      floatingFilter: true,
      minWidth: 150,
      pinned: "left",
      filterParams: {
        buttons: ["reset", "apply"],
        debounceMs: 200,
      },
    },
    { field: "age", minWidth: 50 },
    { field: "country", minWidth: 100 },
    { field: "year", minWidth: 100 },
    { field: "date", minWidth: 100 },
    { field: "sport", minWidth: 150 },
    { field: "gold", minWidth: 50 },
    { field: "silver", minWidth: 50 },
    { field: "total", minWidth: 50 },
    { field: "Action", minWidth: 100 },
  ]);

  const defaultColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    editable: false,
  };

  const accordian_array: any = [
    {
      title: "AG_GRID_ACCORDION",
      content: (
        <PtgUiAgGrid
          data={[...GRID_Data]}
          autoGroupColumnDef={autoGroupColumnDef}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          groupSelectsChildren={true}
          pagination={true}
          paginationPageSize={8}
          customPagination={false}
        />
      ),
    },
  ];

const columns = [
  { name: "athlete", header: "Athlete", width: 200 },
  { name: "age", header: "Age", width: 100 },
  { name: "country", header: "Country", width: 150 },
  { name: "date", header: "Date", width: 100 },
  { name: "sport", header: "Sport", width: 200 },
  { name: "gold", header: "Gold", width: 100 },
  { name: "silver", header: "Silver", width: 100 },
  { name: "total", header: "Total", width: 100 },
  // {
  //   name: "",
  //   header: "",
  //   width: 100,
  //   render: ({}) => (
  //     <button onClick={onClick} className="btn-sm">
  //       {("CLICK_HERE")}
  //     </button>
  //   ),
  // },
];
const filterValue = [
  { name: "athlete", operator: "startsWith", type: "string", value: "" },
  { name: "age", operator: "gte", type: "number", value: "" },
  { name: "country", operator: "startsWith", type: "string", value: "" },
];
return (
  <div className="w-100">
    <h4>Ag Grid Example</h4>
    <PtgUiAgGrid
      data={GRID_Data}
      autoGroupColumnDef={autoGroupColumnDef}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      rowSelection="multiple"
      groupSelectsChildren={true}
      pagination={true}
      paginationPageSize={8}
      customPagination={true}
    />
    <PtgUiReactDataGrid
      data={[...GRID_Data]}
      columns={columns}
      filterValue={filterValue}
      minHeight={550}
      idProperty="id"
      pagination={true}
      nativeScroll={false}
      editable={true}
    />
  </div>
);
}
    export default GRID_Data;
