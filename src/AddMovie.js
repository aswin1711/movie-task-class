import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  image: yup.string()
  .min(4, 'Image link is small')
  .required('This is required bro'),

  name: yup.string()
  .required('This is required bro'),

  rating: yup.number()
  .min(0, 'Really?? Rating is not sufficient')
  .max(10, 'This suffices')
  .required('This is required bro'),

  description: yup.string()
  .min(20, 'Description should be bigger')
  .required('This is required bro'),

  trailer: yup.string()
  .min(4, 'Trailer should be bigger')
  .required('This is required bro'),
});

export function AddMovie() {
  // const [image, setImage] = useState('');
  // const [name, setName] = useState('');
  // const [rating, setRating] = useState('');
  // const [description, setDescription] = useState('');
  // const [trailer, setTrailer] = useState('');

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {image: "", name: "", rating: "", description: "", trailer: ""},
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
        console.log('onSubmit', values)
        addMovie(newMovie)
    }
})

  const history = useHistory();

  const addMovie = (newMovie) => {
    // const newMovie = {
    //   image,
    //   name,
    //   rating,
    //   description,
    //   trailer,
    // };

    fetch('https://61988da9164fa60017c230e7.mockapi.io/movies', {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {'Content-type': 'application/json'}
    }) 
    .then(() => history.push('/movies'))
  };

  return <form onSubmit={handleSubmit} className='movie-form-lists'>
    <TextField label="Enter Image url" variant="outlined" id='image' name='image' value={values.image} onChange={handleChange} onBlur={handleBlur}
    error={errors.image && touched.image} helperText={errors.image && touched.image ? errors.image : ""}
    />

    <TextField label="Enter Name" variant="outlined" id='name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
    error={errors.name && touched.name} helperText={errors.name && touched.name ? errors.name : ""}
    />

    <TextField label="Enter Rating" variant="outlined" id='rating' name='rating' value={values.rating} onChange={handleChange} onBlur={handleBlur}
    error={errors.rating && touched.rating} helperText={errors.rating && touched.rating ? errors.rating : ""}
    />

    <TextField label="Enter Description" variant="outlined" id='description' name='description' value={values.description} onChange={handleChange} onBlur={handleBlur}
    error={errors.description && touched.description} helperText={errors.description && touched.description ? errors.description : ""}
    />

    <TextField label="Enter Trailer" variant="outlined" id='trailer' name='trailer' value={values.trailer} onChange={handleChange} onBlur={handleBlur}
    error={errors.trailer && touched.trailer} helperText={errors.trailer && touched.trailer ? errors.trailer : ""}
    />

    <Button type="submit" variant="contained">Add Movie</Button>
  </form>;
}
