
import { PtgUiD3Line, PtgUiD3Bar, PtgUiD3Pie } from "calendar-update";
import { d3BarData, d3LineData, d3PieData } from '../../mock/mocks';
import { Container, Row } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface D3ChartsProps { }

export function D3Charts(props: D3ChartsProps) {
  return (
    <Container fluid>
        <Row>
          <h4>Bar Chart </h4>
          <PtgUiD3Bar {...d3BarData} />
        </Row>
        <Row>
          <h4>Pie Chart</h4>
          <PtgUiD3Pie {...d3PieData} />
        </Row>
        <Row>
          <h4>Line Char</h4>
          <PtgUiD3Line {...d3LineData} />
        </Row>
      </Container>
  );
}

export default D3Charts;
