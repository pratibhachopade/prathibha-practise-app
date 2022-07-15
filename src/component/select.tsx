import { CITY_LIST, GENDER_LIST } from "../mock/mocks";
import { PtgUiInput, PtgUiLoading, PtgUiMultiSelectbox, PtgUiRadio, PtgUiTextArea } from "calendar-update";
import { useState } from "react";

/* eslint-disable-next-line */
export interface MultiSelectCheckboxProps {}

export function MultiSelectCheckbox(props: MultiSelectCheckboxProps) {
  /*-----onSelect method -----*/
  const onSelect: any = (event: any) => {
    console.log("Select Values,onSelect", event);
  };
  const [input,setInpt] = useState("");
  const[textarea,setTextArea] = useState("")
  const [radio,setRadio]= useState('male')
  return (
    <>
      <section>
        <div className="row">
          <div className="col-lg-4 mb-3 col-sm-6 col-xs-12">
            <h4>Single Select</h4>
            {/*-----Usable component PtgUiMultiSelectbox single select-----*/}
            <PtgUiMultiSelectbox
              name="city"
              list={CITY_LIST}
              onSelect={onSelect}
              showCheckbox={true}
              singleSelect={true}
              placeholder={"select"}
            />
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="row">
          <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 multi-select">
            <h4>Multi Select</h4>
            {/*-----Usable component PtgUiMultiSelectbox multi select-----*/}
            <PtgUiMultiSelectbox
              name="city"
              list={CITY_LIST}
              onSelect={onSelect}
              showCheckbox={true}
              singleSelect={false}
              placeholder={"select"}
            />
          </div>
        </div>
      </section>
      <hr />
      <div className="border col-md-4 ms-3 px-3">
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="inputEmail">{"LABEL_EMAIL"} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0`}
            type="text"
            name="email"
            id="inputEmail"
            value={input}
            onChange={(e: any) => setInpt(e.target.value)}
          />
        </div>
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="inputEmail">{"LABEL_EMAIL"} </label>
          <PtgUiTextArea
            className={`w-100 form-control bg_0`}
            rows="2"
            name="homeAddress"
            id="inputAddress"
            value={textarea}
            onChange={(e: any) => setTextArea(e.target.value)}
          />
        </div>
        {/* loading component */}
        <PtgUiLoading />
        <div className="form-group required col-md-2 mb-2">
          <PtgUiRadio
            name="gender"
            onChange={(e: any) => setRadio(e.target.value)}
            id="inputGender"
            list={GENDER_LIST}
            value={radio}
          />
        </div>
      </div>
    </>
  );
}

export default MultiSelectCheckbox;
