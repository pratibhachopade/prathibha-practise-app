import './bar.scss';
import {PtgUiD3Bar} from 'calendar-update';
import { d3BarData} from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUId3BarProps {}

export function PtgUId3Bar(props: PtgUId3BarProps) {
  return (
    <PtgUiD3Bar {...d3BarData}/>
  );
}

export default PtgUId3Bar;
