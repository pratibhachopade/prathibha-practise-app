/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 * 
*/
import PtgUiHCLine from './highcharts/line/line';
import PtgUiHCLineBar from './highcharts/linebar/linebar';
import PtgUiHCSColumn from './highcharts/stackedColumn/stackedColumn';
import { PtgUiColumn, PtgUiPie, PtgUi3dLine, PtgUi3dColumn, PtgUi3dPie } from 'calendar-update';
import { highchartsLineData, highchartsPieData, highchartsColumnData, line3DOptions, column3DOptions, pie3dData } from '../../mock/mocks';
import { Tabs, Tab } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface HighchartsProps { }

export function Highcharts(props: HighchartsProps) {
  return (
    <div className="w-75">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title="2D graphs">
          <h4 className="m-3">Bar Chart</h4>
          <PtgUiColumn {...highchartsColumnData} />
          <h4 className="m-3">Pie Chart</h4>
          <PtgUiPie {...highchartsPieData} />
          <PtgUiHCLine {...highchartsLineData} />
          <h4 className="m-3">Line Bar Chart</h4>
          <PtgUiHCLineBar />
          <h4 className="m-3">Stacked Chart</h4>
          <PtgUiHCSColumn />
        </Tab>
        <Tab eventKey="3d" title="3D Graphs">
          <h4 className="m-3">Bar Chart</h4>
          <PtgUi3dColumn {...column3DOptions} />
          <h4 className="m-3">Pie Chart</h4>
          <PtgUi3dPie {...pie3dData} />
          <h4 className="m-3">Line Chart</h4>
          <PtgUi3dLine {...line3DOptions} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Highcharts;
