import React from 'react'
import tvpng from '../assets/tv.png'


function Secondsection() {
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
                        src={tvpng}
                        alt=""
                    />
                    <video
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            </section>
    
    </>
  )
}

export default Secondsection