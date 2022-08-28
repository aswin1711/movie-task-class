import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";

export function EditMovie() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://61988da9164fa60017c230e7.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  return movie ? <UpdateMoie movie={movie} /> : ""
}

const UpdateMoie = ({movie}) => {

  const [image, setImage] = useState(movie.image);
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [description, setDescription] = useState(movie.description);
  const [trailer, setTrailer] = useState(movie.trailer);

  const history = useHistory();

  const editMovie = () => {
    const updatedMovie = {
      image,
      name,
      rating,
      description,
      trailer,
    };

    fetch(`https://61988da9164fa60017c230e7.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {'Content-type': 'application/json'}
    }) 
    .then(() => history.push('/movies'))
  };

  return <div className='movie-form-lists'>
  <TextField label="Enter Image url" variant="outlined" value={image} onChange={(event) => setImage(event.target.value)} />
  <TextField label="Enter Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
  <TextField label="Enter Rating" variant="outlined" value={rating} onChange={(event) => setRating(event.target.value)} />
  <TextField label="Enter Description" variant="outlined" value={description} onChange={(event) => setDescription(event.target.value)} />
  <TextField label="Enter Trailer" variant="outlined" value={trailer} onChange={(event) => setTrailer(event.target.value)} />
  <Button color='success' onClick={editMovie} variant="contained">Save</Button>
</div>;
}
