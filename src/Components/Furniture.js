import React, { useEffect, useReducer, useState } from "react";

const monthDLL = () => {
  return (
    <>
      <select >
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>

    </>)

}

const Furniture = () => {

  const initialState = {
    sellMonth: true
  }

  const reducer = (state, action) => {
    if (action.type == 11 || action.type == 5 || action.type == 12) { initialState.sellMonth = true; }
    else { initialState.sellMonth = false; }

  }

  const [state, dispatch] = useReducer(
    reducer,
    initialState

  );




  const [type, setType] = useState("New");
  const [price, setPrice] = useState("Full");

  useEffect(() => {
    if (type == "Old") {
      setPrice("Half")
    }
    else {
      setPrice("Full")
    }

  })

  return (
    <>

      <div>{type} Furniture</div>
      Old Furniture:  <input type="radio" name="type" value={type} onChange={() => { setType("Old") }}></input>
      New Furniture:  <input type="radio" name="type" value={type} onChange={() => { setType("New") }}></input>

      <h1>
        The price will be a {price}
      </h1>

      {/* <monthDLL onChange={ }></monthDLL> */}
    </>

  );

}

export default Furniture;