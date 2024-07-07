import React from 'react'
import { Button } from 'react-bootstrap'


function Head() {
  return (
   <>
   <div className="main">
                <nav>
                    <span
                    ><img
                            width="53"
                            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                            alt=""
                        /></span>
                    <div>
                        <Button variant="danger" className="btn btn-red-sm">Sign In</Button>
                    </div>
                </nav>
                <div className="box"></div>
                <div className="hero">
                    <span>Unlimited movies, TV shows, and more</span>
                    <span>Watch anywhere. Cancel anytime.</span>
                    <span
                    >Ready to watch? Enter your email to create or restart your
                        membership.</span
                    >
                    <div className="hero-buttons">
                        <input style={{height:'54px',width:'330px'}} type="email" placeholder="Email Address" />
                        <Button variant="danger"  className="btn btn-red">Get Started {'>'} </Button>
                    </div>
                </div>
            </div>

   </>
  )
}

export default Head