import "./styles.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { setUser } from "../../store/userSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import TestForm from "../../component/testForm.js";

function LogInTest() {
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
    console.log('ok');
    // signInWithEmailAndPassword(auth, data.Email, data.Password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log("Login successful----->", user);
    //     dispatch(
    //       setUser({
    //         name: user?.displayName,
    //         email: user?.email,
    //         phoneNumber: user?.phoneNumber,
    //         emailVerified: user?.emailVerified,
    //         photoURL: user?.photoURL,
    //         uid: user?.uid,
    //       })
    //     );
    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log("Error in login------->", errorMessage);
    //   });
  };

  return (
    <div className="main">
      {/* <TestForm
        handleOnSubmit={(data) => loginUserFromFirebase(data)}
        data={formFieldData}
      /> */}
      <div className="body">
        
        <div className="leftDiv">
          
          <div className="leftDivHead">
            <div className="leftDivHeadMain" >
              <div className="leftDivHeadImage" ></div>
              <text className="leftDivHeadText">TITLE</text>
            </div>
            
            <text className="welcomeText">WELCOME BACK</text>
          </div>

          <div className="leftDivBody">
            <TestForm data={formFieldData} />
          </div>
        </div>
        
        <div className="rightDiv">
          <div className="rightDivTop" >
            <text>React App</text>
            <div className="rightDivTopDetails" >
              <text>this is some text for testing and and and and and and and and and and and and and and and and and and and and and </text>
            </div>
            <button className="rightDivTopDetailsButton" >START BUTTON</button>
          </div>
        </div>
      </div>
    </div>

    
    // <div className="bg-violet-500">

    // </div>
  );
}

export default LogInTest;
