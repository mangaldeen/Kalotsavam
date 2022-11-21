import React from "react"
import "./login.css"
// import "./vendors.min.css"

import "./style.css"
import "./materialize.css"
import "./style-horizontal.css"

function LoginPage() {
  return (
    <header
      className="horizontal-layout page-header-light horizontal-menu preload-transitions 1-column login-bg blank-page blank-page"
      data-open="click"
      data-menu="horizontal-menu"
      data-col="1-column"
    >
      <div className="row">
        <div className="col s12">
          <div className="container">
            <div id="login-page" className="row">
              <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                <form className="form">
                  <div className="row ">
                    <div className="input-field col s12">
                      <h5 className="ml-4">Sign in</h5>
                    </div>
                  </div>
                  <div className="row margin form-item">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">
                        person_outline
                      </i>
                      <input
                        type="text"
                        id="username"
                        autocomplete="off"
                        required
                      />
                      <label for="username" className="center-align">
                        Username
                      </label>
                    </div>
                  </div>
                  <div className="row margin form-item">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">lock_outline</i>
                      <input
                        type="password"
                        id="password"
                        autocomplete="off"
                        required
                      />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col s12 m12 l12 ml-2 mt-1"
                      style={{ float: "left" }}
                    >
                      <p>
                        <label>
                          <input type="checkbox" />
                          <span>Remember Me</span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <a
                        href="index.html"
                        className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m6 l6">
                      <p className="margin medium-small">
                        <a href="user-register.html">Register Now!</a>
                      </p>
                    </div>
                    <div className="input-field col s6 m6 l6">
                      <p className="margin right-align medium-small">
                        <a href="user-forgot-password.html">
                          Forgot password ?
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="content-overlay"></div>
        </div>
      </div>
    </header>
  )
}

export default LoginPage
