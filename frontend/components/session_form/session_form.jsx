import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
    this.demoUser = this.demoUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.otherForm = this.otherForm.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  otherForm() {
    this.props.clearErrors()
    this.props.otherForm()
  }

  demoUser(e) {
    e.preventDefault();
    const user = {email:'Alex@demo.com', name: 'Alex', password: '123456'};
    this.props.login(user).then(this.props.closeModal)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signup() {
    return( 
      <div>
        <div className="signup-header">
        <h3 className="signup-title">Welcome to Shopsy! </h3>
        </div>
        <div className='button-layout'>
          <h3 className='signup-button'> Create Account! </h3>
          <button className='test-button' onClick={this.otherForm}>Login</button>                 
        </div>
        <br/>
        <br/>
        <br/>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="session-div">
            <label className="label-input">Name</label>
            <br/>
            <input 
                className="form-input"
                onChange={this.update("name")} 
                type="text" 
                value={this.state.name} 
            />
          </div>
          <br />
          <div className="session-div">
            <label className="label-input">Email address</label>
            <br/>
            <input 
                className="form-input"
                onChange={this.update("email")} 
                type="text" 
                value={this.state.email} 
            />
          </div>
          <br />
          <div className="session-div">
            <label className="label-input">Password</label>
            <br/>
            <input 
                className="form-input"
                onChange={this.update("password")} 
                type="password" 
                value={this.state.password} 
            />
          </div>
          <br />
          <div className='signup-submit'>
            <input 
              className="sign-up-button"
              type="submit" 
              value='Sign Up'
            />
          </div>
          
        </form>
      </div>
    )
  }


  login() {
    return (
      <div>
        
        <div className="signup-header">
          <h3 className="signup-title">Welcome to Shopsy! </h3>
        </div>
        <div className='button-layout'>
           <h3 className='signup-button'> Please Login </h3>
          <button className='test-button' onClick={this.otherForm}>Sign Up</button> 
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      <form className="session-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="session-div">
            <label className="label-input">Email address</label>
            <br/>
            <input 
              className="form-input"
              onChange={this.update("email")} 
              type="text" 
              value={this.state.email} 
            />
          </div>
          <br />
          <div className="session-div">
            <label className="label-input">Password</label>
            <br/>
            <input 
              className="form-input"
              onChange={this.update("password")} 
              type="password" 
              value={this.state.password} 
            />
          </div>
          <br />
          <div className="login-demo">
            <input 
              className="login-submit"
              type="submit" 
              value='Login' 
            />   
          </div>
          <div className='demo-button'>                     
            <button
              onClick={this.demoUser}
              className="demo-submit"
              >Demo Login
            </button>
          </div>
        </form>
      </div>
    )
  }



  render() {
    let component;
    this.props.formType === "signup" ? component = this.signup() : component = this.login()
    return component
  }
}

export default SessionForm;
