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
export default function CityCard(props){
    return(
        <MDBCard>
      <MDBCardBody>
        <img style={{width:250}} src='https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Karachi.jpg'/>
        <MDBBtn>Karachi</MDBBtn>
     </MDBCardBody>
    </MDBCard>
    )
}