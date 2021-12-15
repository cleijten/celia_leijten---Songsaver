import React from "react";
function FilterGenre(props) {
  return (
    <div>
     
      <label><h3>Filter by genre:</h3></label>
      <select name="genre" id="genre" value={props.data.genre} onChange={props.handleChange}>
        <option value="">-- Choose a genre --</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="hiphop">Hiphop</option>
      </select>

    </div>
  );
}
export default FilterGenre;
