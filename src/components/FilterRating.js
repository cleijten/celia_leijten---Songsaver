import React from "react";

function FilterRating(props) {
  return (
    <div>
      <select
        name="rating"
        id="rating"
        value={props.data.rating}
        onChange={props.handleChange}
      >
        <option value="">-- Filter on rating --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button onClick={props.onClick}>Reset Filter</button>
    </div>
  );
}
export default FilterRating;
