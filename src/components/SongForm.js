import React from "react";

function SongForm(props) {
 // console.log("songform", props);
  return (
    <div>
      <h3>Add new Song</h3>
      <form onSubmit={props.handleSubmit} id="form-create-song">
        <input
          type="text"
          onChange={props.handleChange}
          name="title"
          placeholder="title song"
          value={props.data.songs.title}
        />
        <input
          type="text"
          onChange={props.handleChange}
          name="artist"
          placeholder="artist"
          value={props.data.songs.artist}
        />
        <input
          type="text"
          onChange={props.handleChange}
          name="genre"
          placeholder="genre"
          value={props.data.songs.genre}
        />
        <input
          type="number"
          onChange={props.handleChange}
          name="rating"
          placeholder="rating (0-5)"
          value={props.data.songs.rating}
        />
        <button>Add Song</button>
      </form>
    </div>
  );
}

export default SongForm;
