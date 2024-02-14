import "./styles.css";
import CustomForm from "../../component/customForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { setUser } from "../../store/userSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formFieldData = [
    {
      label: "Email",
      type: "text",
    },
    {
      label: "Password",
      type: "password",
    },
  ];

  const loginUserFromFirebase = (data) => {
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login successful----->", user);
        dispatch(
          setUser({
            name: user?.displayName,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
            emailVerified: user?.emailVerified,
            photoURL: user?.photoURL,
            uid: user?.uid,
          })
        );
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error in login------->", errorMessage);
      });
  };

  return (
    <div className="main">
      <div className="formContainer">
        <CustomForm
          handleOnSubmit={(data) => loginUserFromFirebase(data)}
          data={formFieldData}
        />
      </div>
    </div>
  );
}

export default LogIn;
