import React from 'react';
import './UserValidation.css';

class UserValidation extends React.Component {
  state = { 
    username: '',
    newEmail: '',
    newPassword: '',
    conf_password: '',
    email: '',
    password: '',
    usernameErr: '',
    emailErr: '',
    passwordErr: '',
    confPasswordErr: '',
    loginVisibility: '',
    signUpVisibility: ''
 };

 onPageLoad = () => {
   this.this.setState({ loginVisibility: 'disable', signUpVisibility: 'enable'});
 }
 accountAlready = () => {
  this.setState({ 
    loginVisibility: '', 
    signUpVisibility: 'disable', 
    emailErr: '', 
    passwordErr: '',
    confPasswordErr: '',
    usernameErr: '',
    email: '',
    password: ''
  });
 }
 notMemberYet = () => {
  this.setState({ 
    loginVisibility: 'disable', 
    signUpVisibility: 'enable', 
    emailErr: '', 
    passwordErr: '' ,
    username: '',
    newEmail: '',
    newPassword: '',
    conf_password: '',
    success: ''
  });
 }
 onUsernameChange = (event) => {
  this.setState({ username: event.target.value, usernameErr: '' });
 }
 onConfPasswordChange = (event) => {
  this.setState({ conf_password: event.target.value, confPasswordErr: '' });
 }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value, newEmail: event.target.value, emailErr: '' });
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value, newPassword: event.target.value, passwordErr: '' });
  }
  
  handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === '') {
      this.setState({ usernameErr: 'Username field cannot be empty!'});
    } else {
      this.setState({ usernameErr: '' });
    }
    if (this.state.newEmail === '') {
      this.setState({ emailErr: 'Email field cannot be empty!'});
    } else {
      this.setState({ emailErr: '' });
    }
    if (this.state.newPassword === '') {
      this.setState({ passwordErr: 'Password field cannot be empty!'});
    } else {
      this.setState({ passwordErr: '' });
    }
    if (this.state.conf_password === '') {
      this.setState({ confPasswordErr: 'This field cannot be empty!'});
    } else {
      this.setState({ confPasswordErr: '' });
    }

    if (this.state.conf_password !== '' && this.state.newPassword !== '' && this.state.newPassword !== this.state.conf_password) {
      this.setState({ confPasswordErr: 'Passwords do not match' });
    } else if (
      this.state.username !== '' &&
      this.state.email !== '' &&
      this.state.conf_password !== '' && 
      this.state.newPassword !== '' && 
      this.state.newPassword === this.state.conf_password) {
      this.setState({ success: 'Welcome new user' })
    }
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    if (this.state.email === '') {
      this.setState({ emailErr: 'Email field cannot be empty!'});
    } else {
      this.setState({ emailErr: '' });
    }
    if (this.state.password === '') {
      this.setState({ passwordErr: 'Password field cannot be empty!'});
    } else {
      this.setState({ passwordErr: '' });
    }
  }

  render() {
    return (
      <div>
        <div className={"form-wrapper " + this.state.loginVisibility} onLoad={this.onPageLoad}>
          <form onSubmit={this.handleLoginSubmit} className="form login-form">
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" value={this.state.email} onChange={this.onEmailChange}/>
              <p className='error'>{this.state.emailErr}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.onPasswordChange}/>
              <p className='error'>{this.state.passwordErr}</p>
            </div>
            <input type="submit" value="Login"/>
          </form>
            <a id="forgettenPass" href="/">Forgotten password?</a>
            <small>Not a member yet? <a onClick={this.notMemberYet} href={this.notMemberYet}>Sign up</a></small>
        </div>


        <div className={"form-wrapper " + this.state.signUpVisibility}>
          <div className="success">{this.state.success}</div>
          <form onSubmit={this.handleSignUpSubmit} className="form login-form">
            <h1>JOIN US</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
              <p className='error'>{this.state.usernameErr}</p>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" value={this.state.newEmail} onChange={this.onEmailChange} />
              <p className='error'>{this.state.emailErr}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={this.state.newPassword} onChange={this.onPasswordChange} />
              <p className='error'>{this.state.passwordErr}</p>
            </div>
            <div className="form-group">
              <label htmlFor="conf_password">Confirm Password</label>
              <input type="password" value={this.state.conf_password} onChange={this.onConfPasswordChange} />
              <p className='error'>{this.state.confPasswordErr}</p>
            </div>
            <input type="submit" value="Login"/>
          </form>
            <small>Already have an account? <a onClick={this.accountAlready} href={this.accountAlready}>Login</a></small>
        </div>
      </div>
    );
  };
};

export default UserValidation;
