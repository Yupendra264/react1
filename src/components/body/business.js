import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import { Gauge } from '@mui/x-charts/Gauge';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line,} from 'recharts';



const data = [
  {
    name: 'kedarnath',
    travelled: 25,
  },
  {
    name: 'chardham',
    travelled: 30,
  },
  {
    name: 'badhrinath',
    travelled: 90,
  },
  {
    name: 'ooty',
    travelled: 27,

  },
  
];
const data1 = [
  {
    name: 'us',
    intTravelled: 50,
  },
  {
    name: 'uk',
    intTravelled: 45,
  },
  {
    name: 'australia',
    intTravelled: 50,
  },
  {
    name: 'japan',
    intTravelled: 25,
  },
  
];


function business() {
  return (
    <div>
        
      
      <Row className='mt-3'style={{paddingTop:'100px'}}>
        <Col sm={1}></Col>
        <Col sm={5} style={{backgroundColor:'#415a77',padding:'30px',borderRadius:'5px',color:'white'}} className='sk'>
          <Row>
            <Col sm={3}> 
            <Gauge
           width={100} height={100} value={99}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>modrate</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='anileft' style={{paddingTop:'25px'}}>Domastic</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col xs={5}style={{backgroundColor:'#778da9',padding:'20px',borderRadius:'5px',marginLeft:'10px',color:'white'}} className='sk'>
        <Row>
            <Col sm={3}> 
            <Gauge
           width={100} height={100} value={70}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>modrate</b></Typography>
           
                 </Col>
            <Col sm={9}><h4 className='aniright' style={{paddingTop:'25px'}}>International</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row className='mt-5'>
        <Col sm={1}></Col>
        <Col><h2 style={{color:'#1B263B'}}>Domastic Travelers:</h2></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={1}></Col>
        <Col sm={5} style={{textAlign:'justify'}}>
          <h5>

Importance of raising an export invoice
In the case of an insurance claim, the export invoice serves as a document for proof.
It serves as evidence that the particular transaction between that buyer and seller has taken place.
It forms an important part  
The government authorities may refer to the export invoice to determine the actual value of the goods and calculate the applicable taxes on them.
To clear the goods from customs in the destination country, the importer may utilise the export invoice.
Indian laws on the export invoice
Often, the question arises as to whether commercial invoices and export invoices are the same.</h5>

        </Col>
        <Col sm={5}>
        <BarChart
          width={550}
          height={350}
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
          <Bar dataKey="travelled" fill="#1B263B" activeBar={<Rectangle fill="lightgreen" stroke="blue" />} />
        </BarChart>
        
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col sm={1}></Col>
        <Col><h2 style={{color:'#1B263B'}}>International travelers:</h2></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={1}></Col>
        <Col sm={5}>
        <BarChart
          width={550}
          height={350}
          data={data1}
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
          <Bar dataKey="intTravelled" fill="#89A7A7" activeBar={<Rectangle fill="coral" stroke="purple" />} />
        </BarChart>
        
        </Col>
        <Col sm={5} style={{textAlign:'justify'}}>
          <h5>Reasons for traveling include recreation,[4] holidays, rejuvenation,[5] tourism[4] or vacationing,[4] research travel,[4] the gathering of information, visiting people, volunteer travel for charity, migration to begin life somewhere else, religious pilgrimages[4] and mission trips, business travel,[4] trade,[4] commuting, obtaining health care,[4] waging or fleeing war, for the enjoyment of traveling, or other reasons. Travelers may use human-powered transport such as walking or bicycling; or vehicles, such as public transport, automobiles, trains, ferries, boats, cruise ships and airplane</h5>

        </Col>
        
      </Row>

    </div>
  )
}

export default business