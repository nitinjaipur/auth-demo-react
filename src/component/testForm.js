import React, { useState } from "react";
import './testStyles.css';
import { auth } from "../firebase/firebase";

const TestForm = ({ handleOnSubmit, data }) => {

    const CustomField = ({data, onSubmit}) => {
        const [state, setState] = useState({
            Gender: "Male",
        });
    
        const handleChangeState = (event) => {
            setState((prev) => ({...prev, [event.target.name]: event.target.value}));
        }

        const handleSubmit = (e) => {
            onSubmit(e, state);
            setState({});
        }

        return(
            <>
            <div className="topLineDiv">
                <hr className="topLine"/>
                <text className="topLineText">Login with Email</text>
                <hr className="topLine"/>
            </div>
                {
                    data.map((item) => (
                        <div className="inputContainer">
                            <label className='testFormLabel'>{item?.label}</label>
                            <input className='testFormInput' placeholder={item?.label} ></input>
                        </div>
                    ))
                }
                <div className="optionContainer">
                    <div>
                        <input type="checkbox" name="loginCheck" value={true} />
                        <text>Keep me logged in</text>
                    </div>
                    <text style={{color: 'brown'}}>Forgot your password?</text>
                </div>
                <button className="submitButton" >Submit</button>
                <div className="formTail">
                    <text>Don't have an account?</text>
                    <text style={{color: 'brown'}}>Sign up</text>
                </div>
            </>
        );
    };


    const onSubmitForm = (event, data) => {
        event.preventDefault();
        handleOnSubmit(data);
    }

    return(
        <div id="formContainer">
            <form className="testFormContainer">
                <CustomField data={data} onSubmit={() => {}}/>
            </form>
        </div>
    )
}

export default TestForm;