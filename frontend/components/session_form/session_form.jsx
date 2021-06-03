import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
        <div className="signup-form">
          <h3 className="header-form">{this.props.formType}</h3>
          {/* <input
              className="login-submit"
              // onClick={() => this.props.openModal("Sign In")}
              type="submit"
              value={"login"}
          /> */}
        </div>
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
            <label className="label-input">Email</label>
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
          <input 
              className="signup-button"
              type="submit" 
              value={this.props.formType} 
          />
        </form>
      </div>
    )
  }


  login() {
    return (
      <div>
        
        <div className="signup-form">
          <h3 className="header-form">{this.props.formType}</h3>
          {/* <input
            className="signup-submit"
            // onClick={() => this.props.openModal("signup")}
            type="submit"
            value={"signup"}
          /> */}
      </div>
      <form className="session-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="session-div">
            <label className="label-input">Email</label>
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
          <div className="sign-demo">
            <input 
              className="signin-submit"
              type="submit" 
              value={this.props.formType} 
            />
              
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