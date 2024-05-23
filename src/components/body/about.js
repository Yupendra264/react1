import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../assets/aaaa.jpg';
import Img from '../assets/a.jpg';
import Img2 from '../assets/aa.jpg';
import Img3 from '../assets/aaa.jpg';

function Home() {
  return (
    <div>
      <Row className='mt-5 bg'>
        <Col sm={1}></Col>
        <Col sm={10}><h1 className='aniright landtext'style={{paddingTop:'200px'}}>Uppu travels</h1>
        <center><h2 className='anileft'style={{color:'tomato'}}>Your comfort is our priority</h2></center>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row><h3 style={{color:'#0D1B2A'}}>About:</h3></Row>
      <Row >
        <Col sm={11}><p style={{color:'black',fontSize:'20px'}}> "Introducing Uppu Travels, where every journey is a story waiting to be told. Uppu Travels offers a unique blend of adventure, culture, and relaxation, providing unforgettable experiences for travelers seeking to explore the world. With carefully crafted itineraries and personalized service, Uppu Travels ensures that every trip is an extraordinary adventure. From breathtaking natural landscapes to vibrant cultural experiences, Uppu Travels is your gateway to unforgettable destinations.</p></Col>
      </Row>
      <Row><h3 style={{color:'#0D1B2A'}}>Our motto:</h3></Row>
      <Row>
        <Col> <p style={{color:'black',fontSize:'20px'}} > "Every trip is customized to meet your preferences and interests, ensuring a personalized and fulfilling adventure.
Expert Guides: Our knowledgeable guides provide insider insights, enriching your travel experience with historical, cultural, and local context.
Hidden Gems: Discover off-the-beaten-path destinations and hidden gems that only locals know about, creating memories that will last a lifetime.</p></Col>
      </Row>
      <Row className='mt-3'>
        <Col>
        <h2 style={{color:'#0D1B2A'}}>Packeges:</h2>
        </Col>
      </Row>
      <Row className='mt-2 mb-4'>
        <Col sm={4}><img src={Img} height={200} className='cl'/> </Col>
        <Col sm={4}><img src={Img2} height={200} width={350} className='cl'/></Col>
        <Col sm={4}><img src={Img3} height={200} width={350} className='cl'/></Col>
      </Row>


    </div>
  )
}

export default Home