import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";

const SelectStep1 = () => {
  const context = useContext(coreContext);

  return (
    <Observer>
      {() => (
        <div></div>
      )}
    </Observer>
  );
};

export default SelectStep1;
