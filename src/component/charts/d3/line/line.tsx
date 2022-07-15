import './line.scss';
import {PtgUiD3Line} from 'calendar-update';
import { d3LineData} from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUId3LineProps {}

export function PtgUid3LineDummy(props: PtgUId3LineProps) {
  console.log('d3linedata:',d3LineData);
  return (
    <PtgUiD3Line {...d3LineData}/>
  );
}

export default PtgUid3LineDummy;
