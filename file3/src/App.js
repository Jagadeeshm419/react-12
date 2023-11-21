import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik'
import * as yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues:{
      username:'',
      email:''

    },

    validationSchema:yup.object({
      username:yup.string()
      .required('Username is not empty')
      .min(2,'min 2 letters need')
      .max(5,'max 5 letters only allowed'),
      email:yup.string()
      .required('Email is not empty')
      .email()

    }),
    onSubmit:(Redot)=>{
      console.log(Redot)

    } 

  })
  return (
    <div className="App">
     <form onSubmit={formik.handleSubmit}>
      <input type = 'text' name='username' value={formik.values.username} onChange={formik.handleChange}/>
      {formik.errors.username}
      <input type = 'text' name='email' value={formik.values.email} onChange={formik.handleChange}/>
      {formik.errors.email}
      <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
