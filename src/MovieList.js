import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export function MovieList() {
  const history = useHistory();
  const [movies, setMovies] = useState([])
  const getMovies = () => {
    fetch('https://61988da9164fa60017c230e7.mockapi.io/movies', {
      method: "GET",
    }) 
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs))
  }
  useEffect(getMovies, [])

  const deleteMovies = (id) => {
    // const removeMovieIndex = index;
    // const remainingMovie = movies.filter((mv, idx) => 
    //   idx !== removeMovieIndex
    // );
    //   setMovies(remainingMovie)

    fetch(`https://61988da9164fa60017c230e7.mockapi.io/movies/${id}`, {
      method: "Delete",
    })
    .then(() => getMovies());
  };


  return (
    <div className='movie-list'>
      {movies.map(({ image, name, rating, description, id}, index) => (
        <Movie image={image} name={name} rating={rating} description={description} id={id}
        deleteButton={
          <IconButton color='error' onClick={
            () => deleteMovies(id) }>
            <DeleteIcon />
          </IconButton>
        }
        updateButton={
          <IconButton color='secondary' onClick={
            () => history.push('/movies/edit/' + id) }>
            <EditIcon />
          </IconButton>
        }/>
      ))}
    </div>
  );
}
