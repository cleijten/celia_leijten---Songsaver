import React from "react";

function SongList(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr className="list">
            <td className="song-row__item">{props.song.title}</td>
            <td className="song-row__item">{props.song.artist}</td>
            <td className="song-row__item">{props.song.genre}</td>
            <td className="song-row__item">{props.song.rating}</td>
            <td>
              <button onClick={props.onClick}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SongList;
