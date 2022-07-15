import './column.scss';
import { PtgUiColumn } from "calendar-update";
import { highchartsColumnData} from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCColumnProps {}

export function PtgUiHCColumn(props: PtgUiHCColumnProps) {
  return (
    <PtgUiColumn {...highchartsColumnData}/>
  );
}

export default PtgUiHCColumn;
