import React from "react";

import './Login.scss';

// sau này sẽ lấy từ file translations để dùng redux dịch ngôn ngữ
const login = {
  login_title: 'login',
  userName: 'user name',
  pass: 'password'
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isShowPass: false
    }
  }

  handleOnchangeInput = e => {
    if (e.target && e.target.value) {
      this.setState({
        userName: e.target.value
      })
    }
    else {
      this.setState({
        userName: ''
      })
    }
  }

  handleOnchangePass = e => {
    if (e.target && e.target.value) {
      this.setState({
        password: e.target.value
      })
    }
    else {
      this.setState({
        password: ''
      })
    }
  }

  handleSubmit = () => {
    if (this.state.userName && this.state.password) {
      console.log(this.state);
    }
  }

  handleShowHidePass = () => {
    this.setState({
      isShowPass: !this.state.isShowPass
    })
  }
  render() {
    const { userName, password, isShowPass } = this.state;

    return (
      <div
        className="login-background">
        <div className="login-container px-5">
          <div className="login-content row">
            <div className="col-12 text-center login-title heading-title">{login.login_title}</div>
            <div className="col-12 form-group login-input">
              <label htmlFor="">{login.userName}:</label>
              <input type="text"
                className="form-control"
                placeholder="Enter your name"
                value={userName}
                onChange={event => this.handleOnchangeInput(event)} />
            </div>
            <div className="col-12 form-group login-input">
              <label htmlFor="" >{login.pass}:</label>

              <div className="custom-input-password">
                <input type={isShowPass ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={event => this.handleOnchangePass(event)}
                />
                <span
                  onClick={() => this.handleShowHidePass()}>
                  <i className={isShowPass ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                </span>
              </div>

            </div>
            <div className="col-12">
              <button className="btn-login"
                onClick={() => this.handleSubmit()}>login</button>
            </div>
            <div className="col-12 fogot-password">
              <span>forgot password ?</span>
            </div>

            <div className="col-12 login-with">
              <span >or login with: </span>

              <div className="login-icons" >
                <i class="fab fa-facebook"></i>
                <i class="fab fa-google"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Login;