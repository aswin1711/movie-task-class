import { useState } from "react";
import { Counter } from "./Counter";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";


export function Movie({ image, name, rating, description, id, deleteButton, updateButton }) {
  const [show, setShow] = useState(true);
  const styles = {display: show ? 'block' : 'none'}
  const history = useHistory();
  return (
    <Card className="movie-container">
      <img className="movie-poster" src={image} alt="" />
      <CardContent>
      <div className="movie-specs">
        <h3 className="movie-name">{name}
        <IconButton color= 'primary' onClick={() => setShow(!show)}>
        {show ? <ExpandMoreIcon /> : <ExpandLessIcon />} 
        </IconButton>

        <IconButton color= 'primary' onClick={() => history.push(`/movies/${id}`)}>
        <InfoIcon />
        </IconButton>
        </h3>
        <p className="movie-rating">{rating}</p>
      </div>
      </CardContent>
      {/* <Button onClick={() => setShow(!show)} style={{marginBottom: '20px'}} variant="contained">{show ? 'Hide' : 'Show'} Description</Button>   */}

      {/* Conditional styling */}
      <p style={styles}>{description}</p>

      {/* Conditional Rendering */}
      {/* {show ? <p>{description}</p> : ""} */}
      <CardActions>
      <Counter />
      {deleteButton}
      {updateButton}
      </ CardActions>
    </Card>
  );
}
