import "./styles.css";
import CustomForm from "../../component/customForm";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

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
    {
      label: "Gender",
      type: "select",
      options: ["Male", "Female"],
    },
  ];

  const signOutFromFirebase = (redirectToLoginScreen = false) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        if (redirectToLoginScreen) {
          // Redirecting To Login Screen
          navigate("/login");
        }
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const createUserOnFirebase = (data) => {
    signOutFromFirebase();
    createUserWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created", user);
        signOutFromFirebase(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorMessage);
      });
  };

  return (
    <div className="main">
      <div className="formContainer">
        <CustomForm
          handleOnSubmit={(data) => createUserOnFirebase(data)}
          data={formFieldData}
        />
      </div>
    </div>
  );
}

export default SignUp;
