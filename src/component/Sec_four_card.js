import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
export default function Sec_four_card(){
    return(
        <MDBCard className='sec_four_card'>
      <MDBCardBody>
        <MDBCardTitle>foodpanda for business</MDBCardTitle>
        <MDBCardText>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</MDBCardText>
<MDBBtn>Get Started</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    )
}