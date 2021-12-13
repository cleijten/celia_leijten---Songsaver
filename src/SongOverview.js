import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Starman",
          artist: "David Bowie",
          genre: "pop",
          rating: 5,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (song) => {
    song.preventDefault();
    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      console.log(`new Songs: ${newSongs.songs}`);
      const newSong = {
        id: prevState.songs.length + 1,
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.genre,
        rating: this.state.rating,
      };
      console.log(`new Song: ${newSong}`);
      newSongs.push(newSong);
      const newStateSongs = { ...prevState, songs: newSongs };
        console.log(`new State Song: ${newStateSongs.songs[1]}`);

        // const sortedSongs = newStateSong.sort((a, b) => {
        //     return a[this.state.artist] - b[this.state.artist]
        // })
      return newStateSongs;
    });
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const songComponents = this.state.songs.map((item) => {
      return <SongList key={item.id} song={item} />;
    });

    return (
      <div>
        <SongForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        <table>
          <tbody>
            <tr className="song-header">
              <td className="song-row__header">Song</td>
              <td className="song-row__header">Artist</td>
              <td className="song-row__header">Genre</td>
              <td className="song-row__header">Rating</td>
            </tr>
          </tbody>
        </table>
        {songComponents}
      </div>
    );
  }
}

export default SongOverview;
