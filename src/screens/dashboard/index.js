import "./styles.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase.js';
import { removeUser } from '../../store/userSlice.js'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user);

  return (
    <div className="countainer">
      <div className="dataBox">

        {
            (Object.keys(currentUser)).map((item) => {
                return(
                <div key={item} className="data">
                    <text>{item} :</text>
                    <text>{currentUser[item] || 'NA'}</text>
                </div>
                )
            })
        }

      </div>
    </div>
  );
}

export default Dashboard;
