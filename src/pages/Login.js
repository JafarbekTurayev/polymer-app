import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {connect} from "react-redux";
import {loginUser} from "../redux/action/authAction";

const Login = (props) => {

    const login = (event, values) => {

        props.loginUser(values, props.history);
    }

    return (
        <div>
            <div>
                <div className="container">
                    <div className="row vh-100 align-items-center">
                        <div className="col-4 offset-4">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={login}>
                                        <AvField
                                            name="phoneNumber"
                                            placeholder="Phone number"
                                            type="text"
                                            required
                                        />

                                        <AvField
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                            required
                                        />

                                        <button type='submit' disabled={props.isLoading}
                                                className='btn btn-success btn-block'> {props.isLoading ?
                                            <span className='spinner-border spinner-border-sm'/> : ""} Login
                                        </button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.login.isLoading
    }
}

export default connect(mapStateToProps, {loginUser})(Login);