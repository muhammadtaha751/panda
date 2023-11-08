import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Input() {
  const navigate = useNavigate()
  function findFood(){
navigate('/dashboard')
  }
  return (
    <MDBInputGroup style={{width:700}}>
      <MDBInput label='Enter full address' />
      <MDBBtn rippleColor='dark'>
      <MDBBtn onClick={findFood}>Find Food</MDBBtn>
      </MDBBtn>
    </MDBInputGroup>
  );
}