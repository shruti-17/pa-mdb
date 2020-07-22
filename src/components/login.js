import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import {Button} from 'reactstrap';

export const FormPage = () => {
  return (
    <MDBContainer className='d-flex justify-content-center backg'>
      <MDBRow className='col-md-6'>
        <MDBCol>
          <MDBCard className='mt-5'>
            <MDBCardHeader>Company Name/Logo</MDBCardHeader>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">SignIn</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="primary" type="submit">
                    SignIn
                  </MDBBtn>
                  <Button variant="link" className='text-right'>Or SignUp</Button>
                </div> 
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
