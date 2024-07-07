import React from 'react'

function Fourthsection() {
  return (
    <>
    <section className="first">
                <div>
                    <span>Enjoy on your TV</span>
                    <span 
                    >Watch on smart TVs, PlayStation, Xbox, Chromecast,
                        </span>
                        <span style={{fontSize:'24px'}}> Apple TV, Blu-ray
                        players and more.</span>
                </div>

                <div className="secImg">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                        alt=""
                    />
                    <video style={{position:'absolute',top:'60px',right:'',scale:'0.895'}}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            </section>
    
    </>
  )
}

export default Fourthsection