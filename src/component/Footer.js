import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>


            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  © 2023 foodpanda
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Press Help Center
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Refunds with pandapay
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Pandapay User Account Terms and Conditions
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Terms and conditions Privacy policy
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  <li>
                    <a href='#!' className='text-dark'>
                      Security Download foodpanda Apps
                    </a>
                  </li>
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Careers Suggest a restaurant
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Corporate Customer
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Cashback Terms and Conditions
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  All cuisines foodpanda Magazine
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Partner with us pandago - Request a rider
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  foodpanda Vouchers&Promo
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  All cities Update on COVID-19 in Pakistan
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  pandamart Grocery Delivery
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  pandapro - monthly subscription
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  programme
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  foodpanda home chef Become an affiliate
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Ramzan deals
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>

  )

}
export default Footer