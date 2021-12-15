import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import FilterGenre from "./components/FilterGenre";
import FilterRating from "./components/FilterRating";

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
        {
          id: 2,
          title: "Life on Mars",
          artist: "David Bowie",
          genre: "pop",
          rating: 5,
        },
        {
          id: 3,
          title: "Supermassive Black Hole",
          artist: "Muse",
          genre: "rock",
          rating: 4,
        },
        {
          id: 4,
          title: "Rocket Man",
          artist: "Elton John",
          genre: "pop",
          rating: 3,
        },
        {
          id: 5,
          title: "Paint it Black",
          artist: "Rolling Stones",
          genre: "rock",
          rating: 5,
        },
      ],
    };

    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilterGenre = this.handleFilterGenre.bind(this);
    this.handleFilterRating = this.handleFilterRating.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit = (song) => {
    song.preventDefault();
    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      //console.log("new Songs:", newSongs);
      const newSong = {
        id: prevState.songs.length + 1,
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.genre,
        rating: this.state.rating,
      };

      //console.log("new Song:", newSong);
      newSongs.push(newSong);

      const newStateSongs = { ...prevState, songs: newSongs };
      //console.log("new Statesongs", newStateSongs);

      document.getElementById("form-create-song").reset();
      return newStateSongs;
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    // console.log("delete button clicked");

    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      const tdId =
        event.target.parentElement.parentElement.firstChild.innerHTML;
      const foundId = newSongs.find(({ id }) => id === tdId);
      const index = newSongs.indexOf(foundId);

      // console.log("id is", tdId)
      // console.log("index is", index)
      // console.log("newsongs is", newSongs)

      newSongs.splice(index, 1);
      const newStateSongs = { ...prevState, songs: newSongs };
      return newStateSongs;
    });
  };

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFilterGenre(event) {
    event.preventDefault();

    this.setState((prevState) => {
      let selectedGenre = event.target.value;
      // console.log("selected genre is", selectedGenre);
      const newSongs = [...prevState.songs];

      const filteredSongs = newSongs.filter(
        (item) => item.genre === selectedGenre
      );
      const newStateSongs = { songs: filteredSongs };

      // console.log("prevState", prevState);

      return newStateSongs;
    });
  }

  handleFilterRating(event) {
    event.preventDefault();

    this.setState((prevState) => {
      let selectedRating = parseInt(event.target.value);
      //  console.log("selected rating is", selectedRating);
      const newSongs = [...prevState.songs];

      const filteredSongs = newSongs.filter(
        (item) => item.rating === selectedRating
      );
      const newStateSongs = { songs: filteredSongs };

      // console.log("prevState", prevState);

      return newStateSongs;
    });
  }

  //reset to original state

  handleReset(event) {
    event.preventDefault();
    this.setState(this.baseState);
  }

  render() {
    const songsObj = this.state.songs;
    const sortedSongs = songsObj.sort((a, b) => (a.artist > b.artist ? 1 : -1));
    // console.log("sorted", sortedSongs);
    const songComponents = sortedSongs.map((item) => {
      return <SongList key={item.id} song={item} onClick={this.handleDelete} />;
    });

    return (
      <div>
        <h1>Playlist</h1>

        <FilterGenre
          handleChange={this.handleFilterGenre}
          data={this.state}
          onClick={this.handleReset}
        />

        <FilterRating
          handleChange={this.handleFilterRating}
          data={this.state}
          onClick={this.handleReset}
        />
        <h3>List of songs</h3>
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

        <SongForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
      </div>
    );
  }
}

export default SongOverview;
