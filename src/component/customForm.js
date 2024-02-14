import React, { useState } from "react";
import './styles.css';
import { ref, set } from 'firebase/database'
import { firestore, database } from '../firebase/firebase.js';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

const CustomForm = ({ handleOnSubmit, data }) => {

    const CustomField = ({data, onSubmit}) => {
        const [state, setState] = useState({});
    
        const handleChangeState = (event) => {
            setState((prev) => ({...prev, [event.target.name]: event.target.value}));
        }

        const handleSubmit = (e) => {
            onSubmit(e, state.Email, state.Password);
            setState({});
        }
        
        return(
            <>
                {
                    data.map(
                        (item) => (
                                <div className="formDiv" key={item?.label}>
                                    <label>{item?.label}</label>
                                    <input name={item?.label} onChange={handleChangeState} value={state[item?.label] || ''} type={item?.type} ></input>
                                </div>
                        )
                    )
                }
                <div className="submitDiv">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </>
        );
    };

    // function for writing data to firestore    
    async function writeUserData() {
        const db = firestore;
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: 'test',
                email: 'test@test.com',
                age: 0,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // function for writing data to realtime database 
    async function writeUserDataToRealtimeDB() {
        const db = database;
        set(ref(db, 'users/1'), {
            name: 'Vlad',
            email: 'nitin@amplework.com',
            age: 325,
        });
    }

    // function for read data from firestore  
    async function readUserData() {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        });
    }

    const onSubmitForm = (event, email, password) => {
        event.preventDefault();
        handleOnSubmit(email, password);
    }

    return(
        <form>
            <CustomField data={data} onSubmit={(event, email, password) => onSubmitForm(event, email, password)} />
        </form>
    )
}

export default CustomForm;