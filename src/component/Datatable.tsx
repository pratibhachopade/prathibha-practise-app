import React from 'react';
// import {PtgUiReactDataGrid} from "ptg-react";
import { PtgUiReactDataGrid} from 'app-datatable';
import { GRID_Data } from '../grid-data';

function Datatable() {
    const columns = [
        { name: 'athlete', header: 'Athlete', width: 200 },
        { name: 'age', header: 'Age',  width: 100 },
        { name: 'country', header: 'Country',  width: 150},
        { name: 'date', header: 'Date', width: 100},
        { name: 'sport', header: 'Sport',width: 200},
        { name: 'gold', header: 'Gold', width: 100},
        { name: 'silver', header: 'Silver',width: 100},
        { name: 'total', header: 'Total',width: 100 },
        { name: '', header: '', width: 100,
        render: ({})=><button  className="btn-sm">{('CLICK_HERE')}</button>
      },
      ]
      const filterValue = [
        { name: 'athlete', operator: 'startsWith', type: 'string', value: '' },
        { name: 'age', operator: 'gte', type: 'number', value: '' },
        { name: 'country', operator: 'startsWith', type: 'string', value: '' },
      ];
    return (
        <div>
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

export default Datatable;