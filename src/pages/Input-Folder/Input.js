import React from "react";
// import styled from "styled-comonents";
import './Input.css'

function Input() {
    return (
       
        <div className="">

        <div class="row margin">
        <div class="input-field col s12">
          {/* <i class="material-icons prefix pt-2">person_outline</i> */}
          <input id="username" type="text" name="username" placeholder="Username"/>
          {/* <label for="username" class="center-align">Username</label> */}
        </div>
      </div>
      <div class="row margin">
        <div class="input-field col s12">
          {/* <i class="material-icons prefix pt-2">lock_outline</i> */}
          <input id="password" type="password" name="password" placeholder="Password"/>
          {/* <label for="password">Password</label> */}
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <button class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">Login</button>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6 m6 l6">
          <p class="margin medium-small"><a href="/userregister">Register Now!</a></p>
        </div>
        <div class="input-field col s6 m6 l6">
          <p class="margin right-align medium-small"><a href="#">Forgot password ?</a>
          </p>
        </div>
      </div>
      </div>
      
    )

}

export default Input