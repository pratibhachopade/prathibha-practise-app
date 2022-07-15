/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Indeterminate checkbox example using indeterminate checkbox reusable component
 */

import { CHECKBOX_DATA } from "../mock/mocks";
import { PtgUiIndeterminateCheckbox } from "calendar-update";
/* eslint-disable-next-line */
export interface IndeterminateCheckboxProps {}

export function IndeterminateCheckbox(props: IndeterminateCheckboxProps) {
  return (
    <section>
      <div className="row">
        <div className="col-12 mb-3">
          <h4>Indeterminate Checkbox</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mb-3">
          {/*-----Usable component PtgUiIndeterminateCheckbox for Indeterminate Checkbox-----*/}
          <PtgUiIndeterminateCheckbox items={CHECKBOX_DATA} />
        </div>
      </div>
    </section>
  );
}

export default IndeterminateCheckbox;
