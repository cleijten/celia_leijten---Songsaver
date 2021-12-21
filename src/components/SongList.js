import React from "react";

function SongList(props) {
  return (
    <tr className="list">
      <td className="song-row__item">{props.song.title}</td>
      <td className="song-row__item">{props.song.artist}</td>
      <td className="song-row__item">{props.song.genre}</td>
      <td className="song-row__item">{props.song.rating}</td>
      <td className="delete-row">
        <button onClick={props.onClick}>delete</button>
      </td>
    </tr>
  );
}

export default SongList;
