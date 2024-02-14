import "./styles.css";
import CustomForm from '../../component/customForm';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase.js';

function LogIn() {

  const formFieldData = [
    {
      label: 'Email',
      type: 'text',
    },
    {
      label: 'Password',
      type: 'password',
    },
  ];

  const loginUserFromFirebase = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Login successful----->', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error in login------->', errorMessage);
    });
  }

  return (
    <div className="main">
      <div className="formContainer">
        <CustomForm handleOnSubmit={(email, password) => loginUserFromFirebase(email, password)} data={formFieldData} />
      </div>
    </div>
  );
}

export default LogIn;
