import React from "react";

function FilterGenre(props) {
  return (
    <div>
      <select
        name="genre"
        id="genre"
        value={props.data.genre}
        onChange={props.handleChange}
      >
        <option value="">-- Filter on genre --</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="hiphop">Hiphop</option>
      </select>

      <button onClick={props.onClick}>Reset Filter</button>
    </div>
  );
}
export default FilterGenre;
