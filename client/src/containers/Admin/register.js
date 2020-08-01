import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, ClearRegisterUser } from '../../actions';

class Register extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    handleInputEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleInputPassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleInputName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleInputLastname = (event) => {
        this.setState({ lastname: event.target.value })
    }
    redirectUser = () => {
        setTimeout(() => {
            this.props.history.push('/signin')
        }, 1000)
    }
    componentWillUnmount() {
        this.props.dispatch(ClearRegisterUser());
    }


    submitForm = (e) => {
        e.preventDefault();
        this.setState({ error: '' });

        this.props.dispatch(registerUser({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastname: this.state.lastname
        }))
    }

    render() {
        let register = this.props.user.user || false;
        return (
            <div className="rl_container">
                {
                    register.success ?
                        <div className="edit_confirm">
                            You have successfully registered!
                            {this.redirectUser()}
                        </div>
                        : null
                }
                <form onSubmit={this.submitForm}>
                    <h2>Sign up</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleInputName}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Lastname"
                            value={this.state.lastname}
                            onChange={this.handleInputLastname}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>

                    <button type="submit">Sign up</button>
                    <div className="error">
                        {this.state.error}
                    </div>
                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Register)