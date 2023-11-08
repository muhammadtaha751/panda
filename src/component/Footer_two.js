import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer_two() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    <h4>American Food Delivery in Karachi</h4>
                                    <p>Kababjees - Clifton, KFC - Boat Basin, McDonald's - Corniche, Red Apple - North Nazimabad, Burger Lab - Badar, Burger O'Clock</p>
                                    <h4>Pizza Delivery in Karachi</h4>
                                    <p>Pizza Hut - Khayaban E Shahbaz, California Pizza - Rashid Minhas Road, Royal Taste Pizza - Malir, Pizza Lover - Gulshan, Pizza 99, Cafe Bogie</p>
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    <h4>Italian Food Delivery in Karachi</h4>
                                    <p>Broadway Pizza - DHA, 14th Street Pizza Co. - DHA, Expresso Shabhaz, California Pizza - DHA, Bella Vita, Golden Bite Pizza</p>
                                    <h4>Fast Food Delivery in Karachi</h4>
                                    <p>Kababjees - Johar, Milano Pizza & Fast Food, Choakas Food, Burridos, Roll Corner BAR BQ INN, EatFit</p>
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    <h4>Pakistani Food Delivery in Karachi</h4>
                                    <p>Roll Inn, Daily Dubai Restaurant, Cafeela, A-One Snacks, Student Biryani - Saddar, Chairman Mao</p>
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    <h4>Chinese Food Delivery in Karachi</h4>
                                    <p>Spicogetti, La Chine By Kababjees, Dumpling's, China Ming, Chop Soy - Gulshan, Choakas Food</p>
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>

    )

}
export default Footer_two