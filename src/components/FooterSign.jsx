import React from 'react'

function FooterSign() {
  return (
    <>
    <footer className='mb-5'>
            <div  style={{textDecoration:'none'}} className="questions"><span>Questions? Call 000-800-919-1694</span></div>
            <div className="footer">
                <div className="footer-item">
                    <a target='blank' href="">FAQ</a>
                    <a target='blank' href="">Cookie Preferences</a>
                    
                </div>

                <div className="footer-item">
                    <a target='blank' href="/">Help Centre</a>
                    <a target='blank' href="/">Corporate Information</a>
                 
                </div>
                <div className="footer-item">
                    <a target='blank' href="/">Term of Use</a>
                    
                </div>

                <div className="footer-item">
                    <a target='blank' href="/">Privacy</a>
                   
                </div>
                <div className="footer-item">
                    <button className="footer-btn">
                        English <i
                            className="fa-solid fa-caret-down"
                        ></i>
                    </button>
                   
                  

                </div>
            </div>
        </footer>
</>
  )
}

export default FooterSign