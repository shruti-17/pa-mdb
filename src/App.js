import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "./index.css";
import {SignupPage} from './components/signup.js'; 
import { FormPage } from './components/login.js';

class App extends Component {
  render() {
  //   <MDBRow center style={{ height: "100vh" }}>
  //   <MDBCol middle="true" sm="8" className="text-center">
  //     <img src={logo} alt="logo" style={{ width: "10rem" }} />
  //     <h1>Welcome to Your MDB React App</h1>
  //     <p className="mb-2">The application is configured and ready to import our components.</p>
  //     <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></MDBBtn>
  //   </MDBCol>
  // </MDBRow>
    return (
      <MDBContainer>
       <FormPage />
      </MDBContainer>
    );
  }
}

export default App;
