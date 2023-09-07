import React, { useReducer, useState } from "react";

const Reducer = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" onChange={setChecked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </>
  );
};

export default Reducer;
