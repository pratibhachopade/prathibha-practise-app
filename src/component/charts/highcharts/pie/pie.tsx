import './pie.scss';
import { PtgUiPie } from "calendar-update";
import { highchartsPieData} from '../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCPieProps {}

export function PtgUiHCPie(props: PtgUiHCPieProps) {
  return (
    <PtgUiPie {...highchartsPieData}/>
  );
}

export default PtgUiHCPie;
