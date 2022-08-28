import {useFormik} from "formik";
import * as yup from "yup";

// const formValidation = (values) => {
//     const errors = {};
//     console.log('formValidation', values);

//     if(values.email.length < 5) {
//         errors.email = 'Enter longer email'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Enter valid email'
//     }

//     if(values.password.length < 8) {
//         errors.password = 'Enter longer pasword'
//     } else if(values.password.length > 12) {
//         errors.password = 'Enter shorter pasword'
//     }
//     return errors;
// }

// export function BasicForm() {
//     const formik = useFormik({
//         initialValues: {email: "", password: ""},
//         validate: formValidation,
//         onSubmit: (values) => {
//             console.log('onSubmit', values)
//         }
//     })
//   return (
//     <form onSubmit={formik.handleSubmit}>
//     <input
//     id='email' name='email'
//      value={formik.values.email}
//      onChange={formik.handleChange}
//      onBlur={formik.handleBlur}
//      type='email'
//      placeholder="Enter email" />
//     {formik.errors.email && formik.touched.email ? formik.errors.email : ""}

//     <input
//     id='password' name='password'
//     value={formik.values.password}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     type='password'
//     placeholder="Enter password" />
//     {formik.errors.password && formik.touched.password ? formik.errors.password : ""}

//     <button>Submit</button>
// </form>
//   )
// }

// const formValidation = (values) => {
//     const errors = {};
//     console.log('formValidation', values);

//     if(values.email.length < 5) {
//         errors.email = 'Enter longer email'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Enter valid email'
//     }

//     if(values.password.length < 8) {
//         errors.password = 'Enter longer pasword'
//     } else if(values.password.length > 12) {
//         errors.password = 'Enter shorter pasword'
//     }
//     return errors;
// }

const formValidationSchema = yup.object({
        email: yup.string()
        .min(5, 'Need bigger email bro')
        .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Not matched bro')
        .required('This is required bro'),
        password: yup.string().min(5, 'Need longer one bruh')
        .max(12, 'Too big bruh')
        .required('This is required bruh')

    });

export function BasicForm() {
    const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
        initialValues: {email: "", password: ""},
     /*   validate: formValidation, */
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log('onSubmit', values)
        }
    })

  return (
    <form onSubmit={handleSubmit}>
    <input
    id='email' name='email'
     value={values.email}
     onChange={handleChange}
     onBlur={handleBlur}
     type='email'
     placeholder="Enter email" />
    {errors.email && touched.email ? errors.email : ""}

    <input
    id='password' name='password'
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
    type='password'
    placeholder="Enter password" />
    {errors.password && touched.password ? errors.password : ""}

    <button>Submit</button>
</form>
  )
}
