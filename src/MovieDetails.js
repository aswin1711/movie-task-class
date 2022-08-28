import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();
  const history = useHistory();
  // const movie = movies[id];
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://61988da9164fa60017c230e7.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  return (
    <div>
      <iframe
        width="100%"
        height="570"
        src={movie.trailer}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">{movie.rating}</p>
        </div>

        {/* Conditional styling */}
        <p>{movie.description}</p>
      </div>
      <Button onClick={() => history.goBack()} variant="contained" style={{ margin: '20px' }}>Back</Button>
    </div>
  );
}
