import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Tab } from 'bootstrap';

function BasicExample() {
  return (
<Container style={{paddingTop:'100px'}}>
<Row className='aniright'>
      <Col sm={6}>
    <center><h2>USA packeges</h2></center>
    <Table striped bordered hover className='mt-3'>
      <thead>
        <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'black'}}>S.no</th>
          <th style={{color:'black'}}>place</th>
          <th style={{color:'black'}}>days</th>
          <th style={{color:'black'}}>Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>sandiago</td>
          <td style={{color:'black'}}>1m</td>
          <td style={{color:'black'}}>1.5lac</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>miami</td>
          <td style={{color:'black'}}>1m</td>
          <td style={{color:'black'}}>1.5lac</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>florida</td>
          <td style={{color:'black'}}>1m</td>
          <td style={{color:'black'}}>5lac</td>
        </tr>
        <tr style={{backgroundColor:'gray',color:'red'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>8lacs</b></td>
        </tr>
        
      </tbody>
    </Table>
   </Col>

      <Col sm={6}>
      <center><h2>japan packeges</h2></center>
    <Table striped bordered hover className='mt-3'>
      <thead>
      <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'black'}}>S.no</th>
          <th style={{color:'black'}}>place</th>
          <th style={{color:'black'}}>days</th>
          <th style={{color:'black'}}>Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>hiroshima</td>
          <td style={{color:'black'}}>3days</td>
          <td style={{color:'black'}}>50k</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>tokyo</td>
          <td style={{color:'black'}}>10days</td>
          <td style={{color:'black'}}>1lac</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>nagasaki</td>
          <td style={{color:'black'}}>5days</td>
          <td style={{color:'black'}}>50k</td>
        </tr>
        <tr style={{backgroundColor:'gray',color:'red'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>2lacs</b></td>
        </tr>
        
      </tbody>
    </Table>

      </Col>
    </Row>
  <center><h2>Uk Packeges</h2></center>
    <Table striped bordered hover className='mt-3 aniright'>
      <thead>
        <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'black'}}>S.no</th>
          <th style={{color:'black'}}>place</th>
          <th style={{color:'black'}}>days</th>
          <th style={{color:'black'}}>budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>london</td>
          <td style={{color:'black'}}>15days</td>
          <td style={{color:'black'}}>1lac</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>edinburgh</td>
          <td style={{color:'black'}}>5days</td>
          <td style={{color:'black'}}>50k</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>manchester</td>
          <td style={{color:'black'}}>9days</td>
          <td style={{color:'black'}}>1lac</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>4</td>
          <td style={{color:'black'}}>wales</td>
          <td style={{color:'black'}}>10days</td>
          <td style={{color:'black'}}>1lac</td>
        </tr>
        
        <tr style={{backgroundColor:'gray'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>3.5lacs</b></td>
        </tr>
        
      </tbody>
    </Table>
    <center><h2>france packeges</h2></center>
    <Table striped bordered hover className='mt-3 anileft'>
      <thead>
      <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'black'}}>S.no</th>
          <th style={{color:'black'}}>place</th>
          <th style={{color:'black'}}>days</th>
          <th style={{color:'black'}}>budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>paris</td>
          <td style={{color:'black'}}>15days</td>
          <td style={{color:'black'}}>2lac</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>belgium</td>
          <td style={{color:'black'}}>10days</td>
          <td style={{color:'black'}}>1.5lac</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>switzerland</td>
          <td style={{color:'black'}}>10days</td>
          <td style={{color:'black'}}>1.5lacs</td>
        </tr>
        <tr style={{backgroundColor:'gray'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>5lacks</b></td>
        </tr>
        
      </tbody>
      </Table>
    
   
    </Container>
  );
}

export default BasicExample;