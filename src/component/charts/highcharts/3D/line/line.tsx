import './line.module.scss';
import { PtgUi3dLine } from "calendar-update";
import { line3DOptions} from '../../../../../mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHC3dLineProps {}

export function PtgUiHC3dLine(props: PtgUiHC3dLineProps) {
  return (
    <PtgUi3dLine {...line3DOptions}/>
  );
}

export default PtgUiHC3dLine;
