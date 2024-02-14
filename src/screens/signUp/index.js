import "./styles.css";
import CustomForm from "../../component/customForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase.js';

function SignUp() {
  const formFieldData = [
    {
      label: "Name",
      type: "text",
    },
    {
      label: "Age",
      type: "number",
    },
    {
      label: "Email",
      type: "text",
    },
    {
      label: "Password",
      type: "password",
    },
  ];

  const createUserOnFirebase = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User created', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error', errorMessage);
    });
  }

  return (
    <div className="main">
      <div className="formContainer">
        <CustomForm handleOnSubmit={(email, password) => createUserOnFirebase(email, password)} data={formFieldData} />
      </div>
    </div>
  );
}

export default SignUp;
