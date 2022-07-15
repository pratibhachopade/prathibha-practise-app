import './stackedColumn.scss';
import { PtgUiStackedColumn } from "calendar-update";
import { highchartStackedColumnData} from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCStackedColumnProps {}

export function PtgUiHCSColumn(props: PtgUiHCStackedColumnProps) {
  return (
    <PtgUiStackedColumn {...highchartStackedColumnData}/>
  );
}

export default PtgUiHCSColumn;
