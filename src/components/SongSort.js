import React from "react";

function SongSort(props) {
  return (
    <div>
      <select name="sort" id="sort" onChange={props.handleChange}>
        <option value="">-- Sort songs on: --</option>
        <option value="title">Title</option>
        <option value="artist">Artist</option>
        <option value="genre">Genre</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
export default SongSort;
