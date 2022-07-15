import './line.scss';
import { PtgUiLine } from "calendar-update";
import { highchartsLineData, highchartsMultiLineData } from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCLineProps { }

export function PtgUiHCLine(props: PtgUiHCLineProps) {
  return (
    <>
      <h4 className="m-3">{('SINGLE_LINE_CHART')}</h4>
      <PtgUiLine {...highchartsLineData} />
      <h4 className="m-3">{('MULTIPLE_LINE_CHART')}</h4>
      <PtgUiLine {...highchartsMultiLineData} />
    </>

  );
}

export default PtgUiHCLine;
