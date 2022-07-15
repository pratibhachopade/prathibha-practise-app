//import './line.scss';
import {PtgUiLineBar} from 'calendar-update';
import { highchartsLineBarData} from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCLineBarProps {}

export function PtgUiHCLineBar(props: PtgUiHCLineBarProps) {
  return (
    <>
  <PtgUiLineBar {...highchartsLineBarData} />
    </>
  
  );
}

export default PtgUiHCLineBar;
