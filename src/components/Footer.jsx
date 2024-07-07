import React from 'react'

function Footer() {
  return (
    <>
        <footer className='mb-5'>
                <div  style={{textDecoration:'none'}} className="questions"><span>Questions? Call 000-800-919-1694</span></div>
                <div className="footer">
                    <div className="footer-item">
                        <a target='blank' href="">FAQ</a>
                        <a target='blank' href="">Investor Relations</a>
                        <a target='blank' href="/">Privacy</a>
                        <a target='blank' href="/">Speed Test</a>
                    </div>

                    <div className="footer-item">
                        <a target='blank' href="/">Help Centre</a>
                        <a target='blank' href="/">Jobs</a>
                        <a target='blank' href="/">Cookie Prefrences</a>
                        <a target='blank' href="/">Legal Notices</a>
                    </div>
                    <div className="footer-item">
                        <a target='blank' href="/">Account</a>
                        <a target='blank' href="/">Ways to Watch</a>
                        <a target='blank' href="/">Corporate Information</a>
                        <a target='blank' href="/">Only on Netflix</a>
                    </div>

                    <div className="footer-item">
                        <a target='blank' href="/">Media Center</a>
                        <a target='blank' href="/">Term of Use</a>
                        <a target='blank' href="/">Contact Us</a>
                    </div>
                    <div className="footer-item">
                        <button className="footer-btn">
                            English <i
                                className="fa-solid fa-caret-down"
                            ></i>
                        </button>
                        <div>Netflix India</div>
                      

                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer