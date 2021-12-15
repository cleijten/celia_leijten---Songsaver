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
      ratings: [
        {
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilterGenre = this.handleFilterGenre.bind(this);
    this.handleFilterRating = this.handleFilterRating.bind(this);
  }

  handleSubmit = (song) => {
    song.preventDefault();
    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      console.log("new Songs:", newSongs);
      const newSong = {
        id: prevState.songs.length + 1,
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.genre,
        rating: this.state.rating,
      };
      console.log("new Song:", newSong);
      newSongs.push(newSong);
      const newStateSongs = { ...prevState, songs: newSongs };
      console.log("new Statesongs", newStateSongs);

      return newStateSongs;
    });
  };

  handleDelete = (e) => {
    e.preventDefault();
    // console.log("delete button clicked");

    this.setState((prevState) => {
      const newSongs = [...prevState.songs];
      const tdId = e.target.parentElement.parentElement.firstChild.innerHTML;
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
    // const { name, value, type, checked } = event.target;
    // console.log("event target is ", event.target);

    this.setState((prevState) => {
      console.log("selected genre");
      const selectedGenre = event.target.value;
      console.log("selected genre is", selectedGenre);
      const selectedProperty = event.target.name;
      console.log("selected filter is ", selectedProperty);
      const newSongs = [...prevState.songs];
      const filteredSongs = newSongs.filter(
        (item) => item.genre === selectedGenre
      );
      const newStateSongs = { ...prevState, songs: filteredSongs };

      return newStateSongs;
    });
  }

  //een genre selecteren gaat goed, maar als je daarna een ander genre wilt selecteren gaat dat niet want prevState is de nieuwe state, dus op een of andere manier moet ik de filters instellen op de this.state en niet op prevstate. als ik dit kan oplossen dan kan ik verder met de checkboxen

  handleFilterRating(event) {
    event.preventDefault();
    const { name, checked } = event.target;
    //  console.log("event target is ", event.target);
    this.setState((prevState) => {
      //   console.log("checkbox ticked")
      const ratings = prevState.ratings;
      const newSongs = [...prevState.songs];
      //  console.log("ratings is", ratings)
      ratings[name] = checked;
      //  console.log("ratings name is", [name])
      if (ratings.one) {
        console.log("one is ticked");
        const filteredSongs = newSongs.filter((item) => item.rating === 1);
        const newStateSongs = { ...prevState, songs: filteredSongs };
        return newStateSongs;
      }
      if (ratings.two) {
        console.log("two is ticked");
        const filteredSongs = newSongs.filter((item) => item.rating === 2);
        const newStateSongs = { ...prevState, songs: filteredSongs };
        return newStateSongs;
      }
      if (ratings.three) {
        console.log("three is ticked");
        const filteredSongs = newSongs.filter((item) => item.rating === 3);
        const newStateSongs = { ...prevState, songs: filteredSongs };
        return newStateSongs;
      }
      if (ratings.four) {
        console.log("four is ticked");
        const filteredSongs = newSongs.filter((item) => item.rating === 4);
        const newStateSongs = { ...prevState, songs: filteredSongs };
        return newStateSongs;
      }
      if (ratings.five) {
        console.log("five is ticked");
        const filteredSongs = newSongs.filter((item) => item.rating === 5);
        const newStateSongs = { ...prevState, songs: filteredSongs };
        return newStateSongs;
      }
    });
  }

  render() {
    const songsObj = [...this.state.songs];
    const sortedSongs = songsObj.sort((a, b) => (a.artist > b.artist ? 1 : -1));
    console.log("sorted", sortedSongs);
    const songComponents = sortedSongs.map((item) => {
      return <SongList key={item.id} song={item} onClick={this.handleDelete} />;
    });

    return (
      <div>
        <h1>Playlist</h1>

        <FilterGenre handleChange={this.handleFilterGenre} data={this.state} />
        <FilterRating
          handleChange={this.handleFilterRating}
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

// const sortedSongs = newStateSongs.songs.sort((a, b) => {
//     return a[this.state.artist] - b[this.state.artist]
// })
// console.log("sorted Songs", sortedSongs)
