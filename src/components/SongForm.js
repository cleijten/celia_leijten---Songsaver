import React from "react";

function SongForm(props) {
//   console.log("songform", props);
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        onChange={props.handleChange}
        name="title"
        placeholder="title song"
        value={props.data.title}
      />
      <input
        type="text"
        onChange={props.handleChange}
        name="artist"
        placeholder="artist"
        value={props.data.artist}
      />
      <input
        type="text"
        onChange={props.handleChange}
        name="genre"
        placeholder="genre"
        value={props.data.genre}
      />
      <input
        type="number"
        onChange={props.handleChange}
        name="rating"
        placeholder="rating (0-5)"
        value={props.data.rating}
      />
      <button>Add Song</button>
    </form>
  );
}

export default SongForm;


