import './pie.scss';
import {PtgUiD3Pie} from 'calendar-update';
import { d3PieData} from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUId3PieProps {}

export function PtgUId3Pie(props: PtgUId3PieProps) {
  return (
    <PtgUiD3Pie {...d3PieData}/>
      
  );
}

export default PtgUId3Pie;
