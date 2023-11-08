import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { addCartToStore } from '../store/cart'
import { useDispatch } from 'react-redux'

export default function AdCard() {
  const dispatch = useDispatch()

  const addToCart = (item) => {
      dispatch(addCartToStore(item))
    }
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Zinger Burger</MDBCardTitle>
        <MDBCardText>Special for you</MDBCardText>
       <img style={{width:150}}src='https://images.deliveryhero.io/image/fd-pk/LH/nqiz-listing.jpg'/>
     <MDBBtn onClick={addToCart}>Add to cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}