import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import { Gauge } from '@mui/x-charts/Gauge';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line,} from 'recharts';



const data = [
  {
    name: 'schedule 1',
    travelRate:7,
    spent: 3,
    amt: 3,
  },
  {
    name: 'schedule 2',
    travelRate:10,
    spent: 5,
    amt: 5,
  },
  {
    name: 'schedule 3',
    travelRate:9,
    spent: 7,
    amt: 7,
  },
  {
    name: 'shedule 4',
    travelRate:5,
    spent: 7,
    amt: 7,
  },
  
];

function AutoLayoutSizingExample() {
  return (
    <Container style={{paddingTop:'100px'}}>
      <Row className='mt-3'>
        <Col sm={12}><h1><center>Status</center></h1></Col>
        <Col sm={1}></Col>
        <Col sm={5} style={{backgroundColor:'#95B8D1',padding:'30px',borderRadius:'5px',color:'white'}}
         className='sk anileft'>
          <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={99}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>done</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='anileft' style={{paddingTop:'25px'}}>
               our domestic travelling serveices are wide range of tour packeges</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col xs={5}style={{backgroundColor:'#B8E0D2',padding:'20px',borderRadius:'5px',marginLeft:'10px',color:'white'}} className='sk aniright'>
        <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={99}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>done</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='aniright' style={{paddingTop:'25px'}}> 
            our international travelling serveices are wide range of tour packeges</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={1}></Col>
        <Col sm={5} style={{backgroundColor:'#D6EADF',padding:'30px',borderRadius:'5px',color:'white'}} className='sk anileft'>
          <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={70}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>ongoing</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='anileft' style={{paddingTop:'25px'}}>
                70% of our travellers were satisfied with our Packeges</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col xs={5}style={{backgroundColor:'#EAC4D5',padding:'20px',borderRadius:'5px',marginLeft:'10px',color:'white'}} className='sk aniright'>
        <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={45}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>ongoing</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='aniright' style={{paddingTop:'25px'}}>
               only 45% of international packeges to to be modified for the convinience of travellers </h4><br/>
            </Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>

      <Row className='mt-3'>
        <Col><center><h1>Budget expenditure</h1></center></Col>
      </Row>
                                                               {/* graphs */}
     <Row> 
     <Col sm={6}>
      <center>
      <Typography style={{}}>no of scenecs shot on schedule1-3</Typography>
      <Link to='/stat'
                   
            >
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="travelRate" fill="#1B263B" activeBar={<Rectangle fill="lightgreen" stroke="blue" />} />
          <Bar dataKey="spent" fill="#89A7A7" activeBar={<Rectangle fill="coral" stroke="purple" />} />
        </BarChart>
        </Link>
        </center>
        </Col>
        <Col sm={6}>
          <center>
          <Typography style={{}}>no of scenecs shot on schedule1-3</Typography>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="alloted" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="spent" stroke="#82ca9d" />
      </LineChart>
      </center>
      </Col>
      </Row>

    <Row>
      
      <Col sm={12}>
  <center><h2>Pre-release bussiness</h2></center>
    <Table striped bordered hover className='mt-3'>
      <thead>
        <tr style={{backgroundColor:'black'}}>
          <th style={{color:'black'}}>S.no</th>
          <th style={{color:'black'}}>place</th>
          <th style={{color:'black'}}>price</th>
          <th style={{color:'black'}}>no.of days </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>kedharnath</td>
          <td>15000</td>
          <td>7</td>
        </tr>
        <tr>
          <td>2</td>
          <td>badhrinath</td>
          <td>12000</td>
          <td>7</td>
        </tr>
        <tr>
          <td>3</td>
          <td>gangotri</td>
          <td>11000</td>
          <td>7</td>
        </tr>
        <tr style={{backgroundColor:'gray',color:'red'}}>
          <td colSpan={3}><b> mode of travel</b></td>
          <td><b>train</b></td>
        </tr>
        
      </tbody>
    </Table>


      </Col>
    </Row>
    </Container>
    
  );
}

export default AutoLayoutSizingExample;