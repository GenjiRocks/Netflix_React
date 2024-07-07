import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FooterSign from '../components/FooterSign'

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../index.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Signin() {
  return (
    <>
    <div className="main">
                <nav>
                    
                    <span>
                    <Link to="/">
                    <img
                            width="53"
                
                            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                            alt=""/>
                        </Link>
                        
                        </span>
                    <div>
                   
                        
                    </div>
                </nav>
                <div className="box"></div>
                <div className='d-flex justify-content-center align-items-center'>
                <Card  style={{ width: '500px',padding:'30px',backgroundColor:'rgba(0, 0, 0, 0.7)',color:'white' }}>
      
            <Card.Body>
             <Card.Title style={{fontSize:'28px',fontWeight:'bold'}} className='mb-4'>Sign In</Card.Title>
                 <Card.Text>
                 <InputGroup className="mb-3">
        <div>
        <Form.Control style={{width:'400px'}} className='p-3 text-black placeholder-white'
          aria-label="Example text with button addon"
          placeholder="Email or mobile number"
          aria-describedby="basic-addon1"
        />
        <Form.Control style={{width:'400px'}} className='p-3 mt-3 text-black placeholder-white'
          aria-label="Example text with button addon"
          placeholder="Password"
          aria-describedby="basic-addon1"
        />
        </div>
        
        
      </InputGroup>

     

     

    
                     </Card.Text>
            <Button style={{width:'400px',fontSize:'18px',fontWeight:'600',height:'45px'}} className='p-3 btn btn-red d-flex justify-content-center align-items-center'  >Sign In</Button>
            <p className='d-flex justify-content-center mt-3'>OR</p>

            <Button style={{width:'400px',fontSize:'18px',fontWeight:'600',backgroundColor:'rgba(57,55,55,255)',height:'45px'}} className='p-3 btn d-flex justify-content-center align-items-center'   >Use a sign-in code</Button>
            <a href='' className='d-flex justify-content-center mt-3' style={{textDecoration:'none',color:'white'}}>Forgot password?</a>
            {/* need to put a check box and Remember me text after it */
            }<div className='mt-3'><input type="checkbox"
            className="form-check-input me-2"
            id="exampleCheck1"
            />Remember me</div>
            <p style={{fontWeight:'200'}}>New to Netflix? <span style={{fontWeight:'600'}}><a href="" className='text-white'  style={{textDecoration:'none'}}>Sign up now</a></span></p>

             </Card.Body>
                 </Card>

                </div>
                
            </div>
    <FooterSign/>
    </>
  )
}

export default Signin