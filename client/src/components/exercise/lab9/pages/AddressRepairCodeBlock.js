import React, { useState } from "react";
import { AddressRepairData } from "../../../../constants/lab9/AddressRepairData";
import Tab from "../../../all-components/CodeBlock/Components/Tab";
import CodeLine from "../../../all-components/CodeBlock/Components/CodeLine";
import ReactText from "../../../all-components/CodeBlock/StyleComponents/ReactText";

const AddressRepairCodeBlock = () => {
  const addressFormats = useState(AddressRepairData.countries);
  return (
    <>
      <ReactText>const AddressFormats = (props) =&#62; &#123;</ReactText>
      {addressFormats.map((index, country) => {
        <CodeLine>
          <Tab />{" "}
          <ReactText>
            {" "}
            const {country.countryVariable} = &ldquo;{country.countryName}
            &rdquo;{" "}
          </ReactText>
        </CodeLine>;
      })}

      <CodeLine>
        <Tab /> <ReactText> const addressFormats = &#123; </ReactText>
      </CodeLine>
    </>
  );
};

export default AddressRepairCodeBlock;
