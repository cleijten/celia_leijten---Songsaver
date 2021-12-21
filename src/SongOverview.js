import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import FilterGenre from "./components/FilterGenre";
import FilterRating from "./components/FilterRating";
import SongSort from "./components/SongSort";

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
    this.handleSorting = this.handleSorting.bind(this);
  }

  //add a song
  handleSubmit = (song) => {
    song.preventDefault();

    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      const newSong = {
        id: prevState.songs.length + 1,
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.genre,
        rating: this.state.rating,
      };

      newSongs.push(newSong);
      const newStateSongs = { ...prevState, songs: newSongs };
      document.getElementById("form-create-song").reset();

      return newStateSongs;
    });
  };

  //delete a song
  handleDelete = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      const tdId =
        event.target.parentElement.parentElement.firstChild.innerHTML;
      const foundId = newSongs.find(({ id }) => id === tdId);
      const index = newSongs.indexOf(foundId);
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

  //sort songs on different properties
  handleSorting(event) {
    event.preventDefault();

    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      switch (event.target.value) {

        case "title":
          const sortedSongsA = newSongs.sort((a, b) =>
            a.title > b.title ? 1 : -1
          );
          const newStateSongsA = { songs: sortedSongsA };
          return newStateSongsA;

        case "artist":
          const sortedSongsB = newSongs.sort((a, b) =>
            a.artist > b.artist ? 1 : -1
          );
          const newStateSongsB = { songs: sortedSongsB };
          return newStateSongsB;
        
        case "genre":
          const sortedSongsC = newSongs.sort((a, b) =>
            a.genre > b.genre ? 1 : -1
          );
          const newStateSongsC = { songs: sortedSongsC };
          return newStateSongsC;
        
        case "rating":
          const sortedSongsD = newSongs.sort((a, b) =>
            a.rating > b.rating ? 1 : -1
          );
          const newStateSongsD = { songs: sortedSongsD };
          return newStateSongsD;
        
        default:
          return prevState;
      }
    });
  }

  // filter songs on Genre
  handleFilterGenre(event) {
    event.preventDefault();

    this.setState((prevState) => {
      let selectedGenre = event.target.value;
      const newSongs = [...prevState.songs];

      const filteredSongs = newSongs.filter(
        (item) => item.genre === selectedGenre
      );
      const newStateSongs = { songs: filteredSongs };

      return newStateSongs;
    });
  }

  //filter songs on rating
  handleFilterRating(event) {
    event.preventDefault();

    this.setState((prevState) => {
      let selectedRating = parseInt(event.target.value);
      const newSongs = [...prevState.songs];

      const filteredSongs = newSongs.filter(
        (item) => item.rating === selectedRating
      );
      const newStateSongs = { songs: filteredSongs };

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
    const songComponents = songsObj.map((item) => {
      return <SongList key={item.id} song={item} onClick={this.handleDelete} />;
    });

    return (
      <div>
        <h1>Playlist</h1>
        <div id="filter">
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
          <SongSort handleChange={this.handleSorting} data={this.state} />
        </div>

        <table>
          <tbody>
            <tr className="song-header">
              <td className="song-row__header">Title</td>
              <td className="song-row__header">Artist</td>
              <td className="song-row__header">Genre</td>
              <td className="song-row__header">Rating</td>
            </tr>
            {songComponents}
          </tbody>
        </table>

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
