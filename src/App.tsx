/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PtgUiReactDataGrid } from "reactdatagrid-package-reusable";
import React, { useEffect, useState } from 'react';
import './App.css';
// import D3Charts from './component/charts/d3Charts';
// import Highcharts from './component/charts/highcharts';
// import DownloadFileExample from './component/download';
// import IndeterminateCheckbox from './component/indeterminate-checkbox';
// import MultiSelectCheckbox from './component/select';
// import PtgUiReactTableExample from './react-table';
 import { ReactDataGrid } from './ReactDataGrid';
 
// import Datatable from './component/Datat
import { GRID_Data } from './grid-data';
function App() {
  const [gridData,setGridData] = useState<any[]>([])
  const GRID_DATA: any = [
    { 
      "id":1,
      "athlete": "Michael Phelps",
      "age": 23,
      "country": "United States",
      "year": 2008,
      "date": "24/08/2008",
      "sport": "Swimming",
      "gold": 8,
      "silver": 0,
      "total": 8
    },
    {
      "id":2,
      "athlete": "Michael Phelps",
      "age": 19,
      "country": "United States",
      "year": 2004,
      "date": "29/08/2004",
      "sport": "Swimming",
      "gold": 6,
      "silver": 2,
      "total": 8
    },
    { 
      "id":3,
      "athlete": "Michael Phelps",
      "age": 27,
      "country": "United States",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 4,
      "silver": 2,
      "total": 6
    }
  ];
  const filterValue = [
    { name: 'athlete', operator: 'startsWith', type: 'string', value: '' },
    { name: 'age', operator: 'gte', type: 'number', value: '' },
    { name: 'country', operator: 'startsWith', type: 'string', value: '' },
  ];
  const columns = [
    { name: 'id', header: 'ID', width: 200 },
    { name: 'athlete', header: 'Athlete', width: 200 },
    { name: 'age', header: 'Age',  width: 100 },
    { name: 'country', header: 'Country',  width: 150},
    { name: 'year', header: 'Country',  width: 150},
    { name: 'date', header: 'Date', width: 100},
    { name: 'sport', header: 'Sport',width: 200},
    { name: 'gold', header: 'Gold', width: 100},
    { name: 'silver', header: 'Silver',width: 100},
    { name: 'total', header: 'Total',width: 100 },
    /*{ name: '', header: '', width: 100,
    // render: ({})=><button onClick={onClick} className="btn-sm">{t('CLICK_HERE')}</button>
  },*/
  ];
  useEffect(()=>{
    //console.log(typeof GRID_DATA,GRID_DATA.length)
    setGridData([{ 
      "id":1,
      "athlete": "Michael Phelps",
      "age": 23,
      "country": "United States",
      "year": 2008,
      "date": "24/08/2008",
      "sport": "Swimming",
      "gold": 8,
      "silver": 0,
      "total": 8
    },
    {
      "id":2,
      "athlete": "Michael Phelps",
      "age": 19,
      "country": "United States",
      "year": 2004,
      "date": "29/08/2004",
      "sport": "Swimming",
      "gold": 6,
      "silver": 2,
      "total": 8
    },
    { 
      "id":3,
      "athlete": "Michael Phelps",
      "age": 27,
      "country": "United States",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 4,
      "silver": 2,
      "total": 6
    },
    {
      "id":4,
      "athlete": "Natalie Coughlin",
      "age": 25,
      "country": "United States",
      "year": 2008,
      "date": "24/08/2008",
      "sport": "Swimming",
      "gold": 2,
      "silver": 2,
      "total": 4
    },
    {
      "id":5,
      "athlete": "Aleksey Nemov",
      "age": 24,
      "country": "Russia",
      "year": 2000,
      "date": "01/10/2000",
      "sport": "Gymnastics",
      "gold": 2,
      "silver": 1,
      "total": 3
    },
    {
      "id":6,
      "athlete": "Alicia Coutts",
      "age": 24,
      "country": "Australia",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 1,
      "silver": 3,
      "total": 4
    },
    {
      "id":7,
      "athlete": "Missy Franklin",
      "age": 17,
      "country": "United States",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 4,
      "silver": 0,
      "total": 4
    },
    {
      "id":8,
      "athlete": "Ryan Lochte",
      "age": 27,
      "country": "United States",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 2,
      "silver": 3,
      "total": 5
    },
    {
      "id":9,
      "athlete": "Allison Schmitt",
      "age": 22,
      "country": "United States",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 3,
      "silver": 1,
      "total": 4
    },
    {
      "id":10,
      "athlete": "Natalie Coughlin",
      "age": 21,
      "country": "United States",
      "year": 2004,
      "date": "29/08/2004",
      "sport": "Swimming",
      "gold": 2,
      "silver": 2,
      "total": 4
    },
    {
      "id":11,
      "athlete": "Ian Thorpe",
      "age": 17,
      "country": "Australia",
      "year": 2000,
      "date": "01/10/2000",
      "sport": "Swimming",
      "gold": 3,
      "silver": 2,
      "total": 5
    },
    {
      "id":12,
      "athlete": "Dara Torres",
      "age": 33,
      "country": "United States",
      "year": 2000,
      "date": "01/10/2000",
      "sport": "Swimming",
      "gold": 2,
      "silver": 0,
      "total": 2
    },
    {
      "id":13,
      "athlete": "Cindy Klassen",
      "age": 26,
      "country": "Canada",
      "year": 2006,
      "date": "26/02/2006",
      "sport": "Speed Skating",
      "gold": 1,
      "silver": 2,
      "total": 3
  }])
  },[])
  return (
    <div className="App">
       {/* <p>{typeof GRID_DATA}</p>
      <p>{GRID_DATA.length}</p> */}
       <PtgUiReactDataGrid
        data={GRID_Data}
        columns={columns}
        filterValue={filterValue}
        minHeight={550}
        idProperty="id"
        pagination={true}
        nativeScroll={false}
        editable={true}  
        
       /> 
       {/*<>
       <ReactDataGrid/>
       </>*/}
       
       {/* <ReactDataGrid/>  */}
      {/* <PtgUiReactTableExample />  */}
      {/* <DownloadFileExample/> */}
      {/* <IndeterminateCheckbox/>
       <MultiSelectCheckbox/> 
      <D3Charts/>
      <Highcharts/>  */}
      {/* <Datatable/> */}
    </div>
  );
}

export default App;
function t(arg0: string): React.ReactNode {
  throw new Error('Function not implemented.');
}

